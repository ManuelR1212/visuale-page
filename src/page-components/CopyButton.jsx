import { useState, useCallback, useMemo, useEffect } from 'react';
import '../styles/framework.css'

export default function CopyButton({ text }) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleCopyText = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsLinkCopied(true);
      // Mensaje en caso de que se haya copiado exitosamente.
    } catch (error) {
      // Mensaje en caso de que suceda un error
    }
  }, [text, setIsLinkCopied]);

  // Puedes hacer que este mensaje de "Copiado" solo se muestre
  // por un tiempo limitado. Para eso, puedes usar un setTimeout
  // y limpiarlo con clearTimeout. Además, junto con el mensaje,
  // puedes cambiar el color e icono del botón.

  // Definir una variable para el tiempo de duración del mensaje
  const messageDuration = 2000; // 2 segundos

  useEffect(() => {
    let timeoutId;

    if (isLinkCopied) {
      // Mostrar el mensaje "Link copied"
      timeoutId = setTimeout(() => {
        setIsLinkCopied(false);
      }, messageDuration);
    }

    // Limpiar el timeout cuando el componente se desmonte o cuando cambie el estado
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLinkCopied]);

  const buttonText = useMemo(() => {
    if (isLinkCopied) {
      return 'Copied!';
    }

    return 'Copy';
  }, [isLinkCopied]);

  return <button className='padding-5 b-gray100 t-white50  round-full' onClick={handleCopyText}>{buttonText}</button>;
}
