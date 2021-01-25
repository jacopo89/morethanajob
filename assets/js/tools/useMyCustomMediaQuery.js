import {useMediaQuery} from "react-responsive";


export function useMyCustomMediaQuery(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({maxWidth:1024});
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return {
        isDesktopOrLaptop: isDesktopOrLaptop,
        isBigScreen: isBigScreen,
        isTabletOrMobile: isTabletOrMobile,
        isTabletOrMobileDevice: isTabletOrMobileDevice,
        isPortrait: isPortrait,
        isRetina: isRetina
    }
}
