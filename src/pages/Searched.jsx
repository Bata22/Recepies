import {useState, useEffect}from 'react'
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searched, setSearched]= useState([]);
    let params = useParams();

    const  getSearched= async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearched(recipes.results);
    };

    useEffect(() =>{
            getSearched(params.search);
    },[params.search])

  return (
    <Grid>
        {searched.map((item)=>{
            return (
                <Card>
                    <Link to={'/recepie/'+item.id}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3 rem;

`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;

    }
    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
    }
`;


export default Searched