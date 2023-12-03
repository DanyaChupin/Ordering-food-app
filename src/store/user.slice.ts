import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loadState } from './storage'
import axios, { AxiosError } from 'axios'
import { LoginResponse } from '../interfaces/auth.interface'
import { PREFIX } from '../helpers/API'
import { Profile } from '../interfaces/user.interface'
import { RootState } from './store'

export const JWT_PERSISTEN_STATE = 'userData'

export interface UserPersistentState {
	jwt: string | null
}
export interface UserState {
	jwt: string | null
	loginErrorMessage?: string
	profile?: Profile
}
const initialState: UserState = {
	jwt: loadState<UserPersistentState>(JWT_PERSISTEN_STATE)?.jwt ?? null,
}

export const getUserProfile = createAsyncThunk<
	Profile,
	void,
	{ state: RootState }
>('user/profile', async (_, { getState }) => {
	const jwt = getState().user.jwt
	try {
		const { data } = await axios.get<Profile>(`${PREFIX}/user/profile`, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		})
		return data
	} catch (e) {
		if (e instanceof AxiosError) {
			throw new Error(e.response?.data.message)
		}
	}
})

export const login = createAsyncThunk(
	'user/login',
	async (params: { email: string; password: string }) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email: params.email,
				password: params.password,
			})
			return data
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.response?.data.message)
			}
		}
	}
)

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => {
			state.jwt = null
		},
		clearLoginError: state => {
			state.loginErrorMessage = undefined
		},
	},
	extraReducers: builder => {
		builder.addCase(getUserProfile.fulfilled, (state, action) => {
			state.profile = action.payload
			if (!action.payload) {
				return
			}
		}),
			builder.addCase(login.fulfilled, (state, action) => {
				if (!action.payload) {
					return
				}
				state.jwt = action.payload.access_token
			}),
			builder.addCase(login.rejected, (state, action) => {
				state.loginErrorMessage = action.error.message
			})
	},
})

export default userSlice.reducer
export const userActions = userSlice.actions
