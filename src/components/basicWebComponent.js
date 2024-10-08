import catImage from '../imgs/sampleImage.jpg' ;


function BasicComponent ()  {
    
    return(
        <div  style = {{  width: '20%',
                          height : '30%',
                          display: 'flex',
                          flexDirection: 'column',

        }}>
            <h1 style= {{ display: 'flex',
                           justifyContent: 'center',
            }}>Eatch projects title</h1>
            <div  style= {{ display: 'flex',
                           justifyContent: 'center',
            }}>
             <img src={catImage} alt="Logo" />;
            </div>
        </div>
    )
}

export default BasicComponent ;