import React, { useCallback, useRef, useState } from 'react'
import { Container,OverlaysRoot } from './modelWrappersStyle'
import ModelsContext, {CarModel} from './../ModelsContext'
import ModelOverlay from '../ModelOverlay/ModelOverlay'

const ModelsWrapper: React.FC = ({children}) => {

    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

    const registerModel = useCallback((model: CarModel) => {
        setRegisteredModels(state => [...state, model])
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
    }, [])

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(item => item.modelName === modelName) || null
    }, [])
        
    return (
        <ModelsContext.Provider value={{wrapperRef,registerModel,registeredModels,unregisterModel,getModelByName}}>
        <Container ref={wrapperRef}>
            <OverlaysRoot>
                {registeredModels.map(item => (
                    <ModelOverlay key={item.modelName}>
                        {item.overlayNode}
                    </ModelOverlay>
                ))}
            </OverlaysRoot>
            {children}
        </Container>
        </ModelsContext.Provider>
    )
}

export default ModelsWrapper
