import React, {Component} from "react";



class MenuTentangKami extends Component{

  constructor(props){
    super(props);

    this.state = {
      tentang: "Warung Nusantara adalah Restoran yang bernuansa makanan nusantara..Kami ada untuk membuat Anda menikmati makanan khas dari nusantara",
      alamat: "Jl. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
      kontak: "081312345678"
    }
  }
  render(){
    return(
      <div>
        <center>
          <p> Tentang Kami </p> {this.state.tentang}
          <h3> {this.state.alamat} </h3>
          <h4> Kontak Kami : {this.state.kontak} </h4>
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
