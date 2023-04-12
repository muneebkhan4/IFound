export default function listenForOutsideClicks(
    listening,
    setListening,
    menuRef,
    setIsOpen,
  ) {
    return () => {

      if (listening) return
      if (!menuRef.current) return
      setListening(true)
      ;[`click`, `touchstart`].forEach((_type) => {
        document.addEventListener(`click`, (evt) => {
          const cur = menuRef.current
          const node = evt.target
          if (cur && cur.contains(node)) return
          setIsOpen(false)
        })
      })
    }
  }