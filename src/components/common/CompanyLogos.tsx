import amzImg from '../../assets/amz.png'
import ciscoImg from '../../assets/cisco.png'
import bainImg from '../../assets/bain.png'

/**
 * Amazon Brand Logo (From user image: amz.png)
 */
export function AmazonLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <img
      src={amzImg}
      alt="Amazon"
      className={`${className} object-contain rounded-[4px] shrink-0 select-none`}
      loading="eager"
    />
  )
}

/**
 * Cisco Brand Logo (From user image: cisco.png)
 */
export function CiscoLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <img
      src={ciscoImg}
      alt="Cisco"
      className={`${className} object-contain rounded-[4px] shrink-0 select-none`}
      loading="eager"
    />
  )
}

/**
 * Bain & Company Brand Logo (From user image: bain.png)
 */
export function BainLogo({ className = "h-6 sm:h-7 w-auto max-w-[90px]" }: { className?: string }) {
  return (
    <img
      src={bainImg}
      alt="Bain & Company"
      className={`${className} object-contain shrink-0 select-none`}
      loading="eager"
    />
  )
}
