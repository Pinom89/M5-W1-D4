import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBRow, 
  MDBCol,
  MDBContainer    
} from 'mdb-react-ui-kit';
import  './Card.css' 






export default function Card({films}) {
  
  return (
    <>
    <MDBContainer> 
        <MDBRow className='d-flex'>      
            {films.map(film => (
                <MDBCol md='2'>
                    <MDBCard className='mt-4'misura-card >
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={film.img} fluid alt={film.title} />
                    <b>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </b>    
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle>{film.title}</MDBCardTitle>
                        <MDBCardText>
                        Categoria {film.category}
                        </MDBCardText>
                        <MDBBtn href='#'>€ {film.price}</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
            
        </MDBRow>
     </MDBContainer> 
    </>
  );
}
