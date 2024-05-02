export default function GoogleMaps() {
  return (
    <div className="flex h-full min-h-16 w-full items-center justify-center p-1">
      <iframe
        className="h-full w-full rounded-[inherit] border-0"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2459.276684304407!2d15.517449234207586!3d51.947145768309326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47061387ae45b295%3A0x78e420a911ab9b61!2sCentrum%20Kszta%C5%82cenia%20Ustawicznego%20w%20Zielonej%20G%C3%B3rze!5e0!3m2!1spl!2sus!4v1713547372212!5m2!1spl!2sus"
        loading="lazy"
      ></iframe>
    </div>
  )
}
