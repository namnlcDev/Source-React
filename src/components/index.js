import ErrorBoundary from "./errorBoundary"
import { TextPrimary, TextSecondary, TextNormal, TextSocial, TextCategory, TextError } from './text'
import PublicRoute from './route/publicRoute'
import PrivateRoute from './route/privateRoute'
import CustomRoute from './route/customRoute'
import StrictRoute from './route/strictRoute'
import BoxError from "./box-error"
import Image from './image'
import Header from './header'
import { LinkIcon, LinkNormal } from './link'
import Container from './container'
import Footer from './footer'
import Toast from './toast'
import Dropdown from './dropdown'
import Checkbox from './checkbox'
import { ButtonImage } from './button'
export * from './form'

export {
    ErrorBoundary,
    // text
    TextPrimary,
    TextCategory,
    TextSecondary,
    TextNormal,
    TextSocial,
    TextError,
    // Route
    PublicRoute,
    PrivateRoute,
    CustomRoute,
    StrictRoute,
    BoxError,
    Image,
    Header,
    //link
    LinkIcon,
    LinkNormal,
    Container,
    Footer,
    Toast,
    Dropdown,

    // Checkbox
    Checkbox,

    // Button
    ButtonImage
}