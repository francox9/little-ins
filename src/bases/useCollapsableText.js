import {useState} from 'react'
import configs from '../common/configs'
const {CAPTION_WORD_LIMIT} = configs

export const useText = text => {
    return text.split(/\n/)
}

export default (_content) => {
    let contentLines = useText(_content)
    let willShowAll = contentLines.length <= 1 && 
                    contentLines[0].length < CAPTION_WORD_LIMIT

    const completeData = {
        moreToLoad: false, 
        content:contentLines
    }

    const [data, _showAll] = useState( willShowAll ? 
        completeData : 
        {moreToLoad: true, content:[contentLines[0].slice(0, CAPTION_WORD_LIMIT)] }
    )
    const showAll = () => _showAll(completeData)

    return {
        data,
        showAll
    }
}
