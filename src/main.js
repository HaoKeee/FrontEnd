import { createApp } from 'vue'
import App from './App.vue'
import { ElIcon,ElButton,ElButtonGroup,ElInputNumber,ElImage,ElDivider,ElInput,ElAvatar,ElDropdown,ElDropdownMenu,ElDropdownItem } from 'element-plus'
import './assets/style/index.css'

const app = createApp(App)
app.component(ElIcon.name, ElIcon)
app.component(ElImage.name, ElImage)
app.component(ElInput.name, ElInput)
app.component(ElAvatar.name, ElAvatar)
app.component(ElDivider.name, ElDivider)
app.component(ElDropdown.name, ElDropdown)
app.component(ElDropdownMenu.name, ElDropdownMenu)
app.component(ElDropdownItem.name, ElDropdownItem)
app.component(ElButton.name, ElButton)
app.component(ElButtonGroup.name, ElButtonGroup)
app.component(ElInputNumber.name, ElInputNumber)
app.mount('#app')
