import React from 'react';
import './FooterCom.css';

const FooterCom = (props) => (
    <footer>
      <div>
          <h2 className="text-center">آریا الکترونیک</h2>
          <p> ما در راستای ارتقا علم الکترونیک تلاش می کنیم </p>
      </div>
      <div>
          <h2 className="text-center">ما رو دنبال کنید</h2>
          <ul>
              <li><a href=""><i class="fab fa-telegram"></i></a></li>
              <li><a href=""><i class="fab fa-instagram"></i></a></li>
              <li><a href=""><i class="fab fa-linkedin"></i></a></li>
              <li><a href=""><i class="fab fa-google-plus-square"></i></a></li>
          </ul>
      </div>
      <div>
          <h3 className="text-center">عضویت در خبرنامه</h3>
          <div>
           <input className="form-control" placeholder="mohammad19951374.s@gmail.com" />
           <button className="btn btn-primary">ثبت</button>
          </div>
          <br/>
          <h3 className="text-center">ارتباط با ما</h3>
          <p className="text-left">  mohammad19951374.s@gmail.com  <i class="fas fa-at"></i> </p>
      </div>
    </footer>
    );

export default FooterCom;