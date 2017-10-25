import React, { Component } from 'react'

class HomePage extends Component {
  render () {
    return (
      <div>
        <div id='myCarousel' className='carousel slide' data-ride='carousel'>
          <ol className='carousel-indicators'>
            <li data-target='#myCarousel' data-slide-to='0' className='active' />
            <li data-target='#myCarousel' data-slide-to='1' />
            <li data-target='#myCarousel' data-slide-to='2' />
          </ol>
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <img className='first-slide' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='First slide' />
              <div>
                <div className='carousel-caption d-none d-md-block text-left'>
                  <h1>React 16-Redux-Saga Bootstrap Boilerplate</h1>
                  <p>This is boilerplate of React 16, Redux, Redux-Form, Redux-Saga, Bootstrap v4, Mongoose with Login, Register and JWT Authentication.</p>
                  <p><a className='btn btn-lg btn-primary' href='#' role='button'>Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='second-slide' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='Second slide' />
              <div>
                <div className='carousel-caption d-none d-md-block'>
                  <h1>Multilanguage</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className='btn btn-lg btn-primary' href='#' role='button'>Learn more</a></p>
                </div>
              </div>
            </div>
            <div className='carousel-item'>
              <img className='third-slide' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='Third slide' />
              <div>
                <div className='carousel-caption d-none d-md-block text-right'>
                  <h1>One more for good measure.</h1>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a className='btn btn-lg btn-primary' href='#' role='button'>Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className='carousel-control-prev' href='#myCarousel' role='button' data-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='sr-only'>Previous</span>
          </a>
          <a className='carousel-control-next' href='#myCarousel' role='button' data-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <div className='container marketing'>
          <div className='row'>
            <div className='col-lg-4'>
              <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='Generic placeholder image' width='140' height='140' />
              <h2>Authorisation Pages and Functionality</h2>
              <p>Pages with working functionality of Register/Sign in, Login/Sign up. For Authentication we are using JWT(json web tokens)</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
            <div className='col-lg-4'>
              <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='Generic placeholder image' width='140' height='140' />
              <h2>Easy Layout and structure</h2>
              <p>For easy css layouting we are using the most popular css framework. The latest version of Bootstrap v4.</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
            <div className='col-lg-4'>
              <img className='rounded-circle' src='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==' alt='Generic placeholder image' width='140' height='140' />
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className='btn btn-secondary' href='#' role='button'>View details &raquo;</a></p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default HomePage
