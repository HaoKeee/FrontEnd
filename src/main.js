import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/index.css'
import { ElIcon,ElButton,ElButtonGroup,ElInputNumber,ElImage,ElDivider,ElInput,ElAvatar,ElCarousel,ElCarouselItem,ElDropdown,ElDropdownMenu,ElDropdownItem } from 'element-plus'

const app = createApp(App)
app.component(ElIcon.name, ElIcon)
app.component(ElImage.name, ElImage)
app.component(ElInput.name, ElInput)
app.component(ElButton.name, ElButton)
app.component(ElAvatar.name, ElAvatar)
app.component(ElDivider.name, ElDivider)
app.component(ElCarousel.name, ElCarousel)
app.component(ElDropdown.name, ElDropdown)
app.component(ElCarouselItem.name, ElCarouselItem)
app.component(ElDropdownMenu.name, ElDropdownMenu)
app.component(ElDropdownItem.name, ElDropdownItem)
app.component(ElButtonGroup.name, ElButtonGroup)
app.component(ElInputNumber.name, ElInputNumber)
app.mount('#app')
