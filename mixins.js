const btn_btn = document.getElementById('btn')
const input_input = document.getElementById('input')


function Profile(name, address, city, state, zipcode, avatar) {
  (this.name = name),
  (this.address = address),
  (this.city = city),
  (this.state = state),
  (this.zipcode = zipcode),
  (this.avatar = avatar);
}

Profile.prototype ={
  
  updateProfile : function() {
    Object.assign(this, this.getProfileUpdate())
    console.log(this);
    return this;
  },
  
  getProfileUpdate : function(){
    let name = prompt('name')
    let address = prompt('address')
    let city = prompt('city')
    let state = prompt('state')
    let zipcode = prompt('zipcode')
    
    return {
      name, address, city, state, zipcode
    }
  },
}


let user = new Profile('George','','Charlotte', 'NC', '28209', 'none' );


btn.addEventListener('click', function(){
  user.updateProfile();
})