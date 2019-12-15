import React,{Component} from 'react';
import DefaultProfile from '../images/avatar.jpg';
import {Link} from 'react-router-dom';



    class ProfileTabs extends Component {
    render() {

        const {following,followers,posts}= this.props;
        return (
    <div>
    
                <div className="row">


<div className="col-md-4"> 

<h3 className="text-primary">Followers</h3>
<hr />
{followers.map((person, i)=>{

return ( <div key={i}>




<div>

<Link to={`${person._id}`}>


<img 
style={{borderRadius:"50%",border:"2px solid #262626"}}
className="float-left mr-2"
height="30px"
width="30px"
onError={i=>
    (i.target.src=`${DefaultProfile}`)
}

src={`${
    process.env.REACT_APP_API_URL
  }/user/photo/${person._id}`}
  alt={person.name}
/>

<div>


    <p className="lead">{person.name}</p>
</div>
</Link>




</div>
    </div>

);
})}


</div>



<div className="col-md-4"> 

<h3 className="text-primary">Following</h3>
<hr />
{following.map((person, i)=>{

return ( <div key={i}>




<div>

<Link to={`/user/${person._id}`}>


<img 
style={{borderRadius:"50%",border:"2px solid #262626"}}
className="float-left mr-2"
height="30px"
width="30px"
onError={i=>
    (i.target.src=`${DefaultProfile}`)
}

src={`${
    process.env.REACT_APP_API_URL
  }/user/photo/${person._id}`}
  alt={person.name}
/>

<div>


    <p className="lead">{person.name}</p>
</div>
</Link>



</div>
    </div>

);
})}


</div>

<div className="col-md-4">


<h3 className="text-primary">Posts</h3>
<hr />
{posts.map((post, i)=>{

    return ( <div key={i}>
    
    
    
    
    <div>
    
    <Link to={`/post/${post._id}`}>
 
    <div>
    
    
        <p className="lead">
        
        
        {post.title}
        
        
        </p>
    </div>
    </Link>
    
    
    
    
    </div>
        </div>
    
    );
    })}
    

</div>


                </div>




    </div>
        );
    }


    }


    export default ProfileTabs;