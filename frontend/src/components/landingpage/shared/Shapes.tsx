import { cn } from "@/lib/utils"

/**
 * Section transition shapes used across the landing page.
 * Colors come from CSS variables (see globals.css) so that the
 * high-contrast theme works without extra code.
 */

type ShapeProps = {
  className?: string
  /** Flip vertically – the shape "hangs" from the section above. */
  flip?: boolean
  /** Mirror horizontally – helps to avoid repeating the same silhouette. */
  mirror?: boolean
}

function transformClass(flip?: boolean, mirror?: boolean) {
  return cn(flip && "-scale-y-100", mirror && "-scale-x-100")
}

/**
 * Soft double wave: a light layer peeking out behind the main (blue) layer.
 * Without `flip` the blue part is at the bottom (place it ABOVE a blue block).
 * With `flip` the blue part is at the top (place it BELOW a blue block).
 */
export function Wave({ className, flip, mirror }: ShapeProps) {
  return (
    <svg
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "block h-16 w-full sm:h-24 lg:h-32",
        transformClass(flip, mirror),
        className
      )}
    >
      <path
        d="M0 58C164 20 300 8 470 30C640 52 760 104 960 92C1160 80 1280 18 1440 34V150H0Z"
        fill="var(--landing-wave-light)"
      />
      <path
        d="M0 104C190 70 360 62 560 86C760 110 900 132 1100 104C1250 84 1350 62 1440 70V150H0Z"
        fill="var(--landing-blue)"
      />
    </svg>
  )
}

/**
 * Skyline / "drip" silhouette (same family as the footer shape).
 * Without `flip` the colored part rises up (place it ABOVE a colored block).
 * With `flip` the colored part drips down (place it BELOW a colored block).
 */
export function Skyline({
  className,
  flip,
  mirror,
  fill = "var(--landing-blue)",
  shadow = "var(--landing-shadow)",
}: ShapeProps & { fill?: string; shadow?: string }) {
  return (
    <svg
      viewBox="0 0 1400 198"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn(
        "block h-12 w-full sm:h-20 lg:h-28 xl:h-36",
        transformClass(flip, mirror),
        className
      )}
    >
      <path d={SKYLINE_PATH} fill={shadow} />
      <path d={SKYLINE_PATH} fill={fill} transform="translate(0 23.47)" />
    </svg>
  )
}

const SKYLINE_PATH =
  "M25 90.03C25 81.7457 18.2843 75.03 10 75.03H0V197.47H1400V75.03H1390C1381.72 75.03 1375 68.3141 1375 60.0298V15.0002C1375 6.71588 1368.28 0 1360 0H1340C1331.72 0 1325 6.71593 1325 15.0002C1325 23.2845 1318.28 30.0002 1310 30.0002H1290C1281.72 30.0002 1275 36.716 1275 45.0002V91.0002C1275 99.2845 1268.28 106 1260 106H1239.98C1231.7 106.012 1225 112.723 1225 121V131C1225 139.284 1218.28 146 1210 146H1190C1181.72 146 1175 139.284 1175 131V108C1175 99.716 1168.28 93.0002 1160 93.0002H1140C1131.72 93.0002 1125 86.2845 1125 78.0002L1125 38.0002C1125 29.7159 1118.28 23.0002 1110 23.0002H1090C1081.72 23.0002 1075 29.716 1075 38.0002V54.0002C1075 62.2845 1068.28 69.0002 1060 69.0002H1039.97C1031.7 69.0167 1025 75.7262 1025 84.0002L1025 109.97C1025 118.255 1018.28 124.97 1010 124.97H990C981.716 124.97 975 131.686 975 139.97C975 148.255 968.284 154.97 960 154.97L940 154.97C931.716 154.97 925 148.254 925 139.97V57.0002C925 48.716 918.284 42.0002 910 42.0002H890C881.716 42.0002 875 48.716 875 57.0002V88.9324C875 97.2167 868.284 103.932 860 103.932L840 103.926C831.716 103.926 825 97.2099 825 88.9256V33.0002C825 24.7159 818.284 18.0002 810 18.0002H790C781.716 18.0002 775 24.716 775 33.0002V103C775 111.284 768.284 118 760 118H740C731.716 118 725.013 111.285 725.013 103C725.013 94.716 718.297 88.0002 710.013 88.0002H690C681.716 88.0002 675 81.2845 675 73.0002V38.0002C675 29.7159 668.284 23.0002 660 23.0002H640C631.716 23.0002 625 29.716 625 38.0002V90.0002C625 98.2845 618.284 105 610 105L590 105C581.716 105 575 111.716 575 120C575 128.285 568.284 135 560 135H540C531.716 135 525 128.285 525 120V18.0002C525 9.71596 518.284 3.00023 510 3.00023H490C481.716 3.00023 475 9.71595 475 18.0002V99.9853C475 108.27 468.284 114.985 460 114.985L440 114.985C431.716 114.985 425 108.269 425 99.9851V38.0002C425 29.7159 418.284 23.0002 410 23.0002H390C381.716 23.0002 375 29.716 375 38.0002L375 70.0002C375 78.2845 368.284 85.0002 360 85.0002H340C331.716 85.0002 325 91.716 325 100L325 114C325 122.284 318.284 129 310 129H290C281.716 129 275 122.284 275 114V18.0002C275 9.71596 268.284 3.00023 260 3.00023H240C231.716 3.00023 225 9.71595 225 18.0002V90.9404C225 99.2247 218.284 105.94 210 105.94H190C181.716 105.94 175 112.656 175 120.94V126C175 134.284 168.284 141 160 141L140 141C131.716 141 125 134.285 125 126V78.0002C125 69.716 118.284 63.0002 110 63.0002L90 63.0002C81.7157 63.0002 75 69.716 75 78.0002V99.9851C75 108.269 68.2843 114.985 60 114.985H40C31.7157 114.985 25 108.269 25 99.9851V90.03Z"
