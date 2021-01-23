import { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

export const useGlobalContext = () => {
  const { globalState, setGlobalState } = useContext(GlobalContext)

  function setSurpriseImageUrl(imageUrl) {
    setGlobalState({ ...globalState, surpriseImgUrl: imageUrl })
  }

  function setSurpriseWord(word) {
    setGlobalState({ ...globalState, surpriseWord: word })
  }

  return { globalState, setSurpriseImageUrl, setSurpriseWord }
}
