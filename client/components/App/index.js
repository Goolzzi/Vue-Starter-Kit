import './style.css'

export default {
  render (h) {
    return (
      <div id='app' class='container'>
        <router-view></router-view>
      </div>
    )
  }
}
