import React from 'react'
import about_banner from '../assets/about_banner.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${about_banner})` }}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet erat enim. Sed congue ante velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum hendrerit turpis a eleifend gravida. Duis dapibus mattis nibh, eu consectetur justo elementum eget. Mauris pulvinar elementum fringilla. Integer sagittis fermentum ornare. Maecenas quis neque cursus, dignissim sapien ut, consequat odio. Duis condimentum tellus quis est interdum volutpat. Donec venenatis luctus sapien, eu egestas justo. Nulla nulla tortor, condimentum vitae suscipit et, ornare sed purus. Fusce posuere ligula non felis vehicula, ut vestibulum mauris ornare. Donec iaculis, libero ac consequat finibus, enim urna lobortis odio, dictum sollicitudin est erat eget augue. Fusce lectus magna, suscipit non erat aliquam, tempus sodales tellus.
        </p>
        <p>

Nam non iaculis nisi. Pellentesque magna dui, finibus a blandit quis, lobortis in ante. Integer leo lacus, pulvinar a tellus ac, finibus molestie nulla. Integer ultrices nulla eu dui condimentum, nec porttitor arcu dignissim. Nullam cursus nec nulla et aliquet. Sed sit amet dui tincidunt, maximus mauris eget, condimentum sem. Nunc malesuada tellus ut dui congue, eu varius nisi vestibulum. Maecenas gravida quam et dui efficitur efficitur. Sed nec tempor lectus. Nunc feugiat tellus erat, eu pretium risus auctor id. Aliquam eget justo turpis. Sed tempus eget ante nec malesuada. Mauris efficitur nunc nec purus vulputate, ac vulputate purus sodales. Suspendisse vehicula, ipsum at varius facilisis, mauris dolor porta sem, ac dictum lectus velit rutrum eros.
        </p>
      </div>

    </div>
  )
}

export default About
// The above code is created by Furqan Raza