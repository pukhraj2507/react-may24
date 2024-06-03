import React, { useState } from 'react'
import validator from 'validator'

function PasswordCheck() {

    const [errMsg , setErrMsg] = useState('')

    const validatePass = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1, 
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            setErrMsg('Strong Password')
        } else {
            setErrMsg('Weak Password')
        }
    }
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-center text-3xl font-extrabold text-gray-900">Checking Password Strength in ReactJS</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Password" onChange={(evnt) => validatePass(evnt.target.value)} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className={`block text-sm ${errMsg === 'Strong Password' ? 'text-green-600' : 'text-red-600'}`}>{errMsg}</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PasswordCheck


