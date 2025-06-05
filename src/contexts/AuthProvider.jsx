// src/contexts/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }
    loadSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )
    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password) => {
    setLoading(true)
    // v2 : auth.signUp reste correct
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    return error
  }

  const signIn = async (email, password) => {
    setLoading(true)
    // appel mis à jour : signInWithPassword
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    return error
  }

  const signOut = async () => {
    setLoading(true)
    await supabase.auth.signOut()
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
