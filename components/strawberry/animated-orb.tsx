/**
 * Halo décoratif.
 *
 * Il était client, et suivait la souris : chaque orbe posait un écouteur
 * `mousemove` et repeignait un disque de 700 px flouté à 120 px. Sur téléphone,
 * le geste n'existe pas et le flou coûte cher à chaque image — c'était l'une des
 * causes de la lenteur d'affichage.
 *
 * Il est désormais rendu côté serveur, immobile, masqué sous 768 px et effacé
 * pour qui a demandé moins d'animations.
 */
interface AnimatedOrbProps {
  color: string
  size: number
  x: string
  y: string
  blur?: number
  opacity?: number
}

export function AnimatedOrb({ color, size, x, y, blur = 90, opacity = 0.18 }: AnimatedOrbProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-0 hidden rounded-full md:block motion-reduce:hidden"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  )
}
