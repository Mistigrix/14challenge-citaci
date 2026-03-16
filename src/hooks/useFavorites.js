import { useState, useCallback } from "react"

const STORAGE_KEY = "citaci_favorites"

/**
 * Charge les favoris depuis le localStorage
 */
function loadFavorites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

/**
 * Sauvegarde les favoris dans le localStorage
 */
function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
}

/**
 * Gère la liste des citations favorites de l'utilisateur
 * Persisté dans le localStorage
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites)

  const toggleFavorite = useCallback((quote) => {
    setFavorites((prev) => {
      const next = prev.find((f) => f.text === quote.text)
        ? prev.filter((f) => f.text !== quote.text)
        : [...prev, quote]
      saveFavorites(next)
      return next
    })
  }, [])

  const isFavorite = useCallback(
    (quote) => favorites.some((f) => f.text === quote?.text),
    [favorites]
  )

  return { favorites, toggleFavorite, isFavorite }
}
