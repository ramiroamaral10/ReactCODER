import CartWidget from "./CartWidget";


const NavBar = ({titulo}) => {

  return (
<>   

    <div class="container-fluid bg-header position-relative">
            
        
        <div class="row">

            <div class="col-md-4 d-flex ">
                <h1 class="h1-pag d-flex position-absolute top-50 start-0 translate-middle-y  ">{titulo}</h1>
            </div>
            <div class="col-md-4 d-flexl ">
                <div class="dropdown d-flex position-absolute top-50 start-50 translate-middle ">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    EXPLORE
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Buy books</a></li>
                        <li><a class="dropdown-item" href="#">Books we recommend</a></li>
                        <li><a class="dropdown-item" href="#">About us</a></li>
                    </ul>
                </div>    
            </div>
            <div class="col-md-4 d-flex ">
                <ul class="nav nav-pills position-absolute top-50 end-0 translate-middle-y ">
                <CartWidget/>
                </ul>


            </div>    
        </div>            
    
        
    
    
    
    </div>
    
/</>
    





    
  )
}

export default NavBar;