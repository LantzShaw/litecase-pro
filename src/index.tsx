import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/member/reg" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
)
