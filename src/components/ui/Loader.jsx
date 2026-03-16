import { CI_ORANGE, CI_GREEN } from "@/data/constants"
import { useTheme } from "@/context/ThemeContext"

/**
 * Loader animé aux couleurs du drapeau ivoirien
 * 3 points qui rebondissent (orange, blanc, vert)
 */
export default function Loader({ message = "Chargement..." }) {
  const { textSecondary } = useTheme()

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-5">
      <div className="flex items-center gap-2">
        {[CI_ORANGE, "#CCCCCC", CI_GREEN].map((color, i) => (
          <div
            key={i}
            className="w-3.5 h-3.5 rounded-full animate-bounce"
            style={{
              background: color,
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.6s",
            }}
          />
        ))}
      </div>
      <p
        className="text-sm m-0"
        style={{
          color: textSecondary,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {message}
      </p>
    </div>
  )
}
