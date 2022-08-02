import { render } from '@testing-library/react';
import {useState, useEffect} from 'react';
import './Results.css';

function Results(props) {

    const[data, setData] = useState(null); 
    const[repos, setRepos] = useState([]);
    const[responseStatusUser, setUserStatus] = useState(null);
    const[responseStatusRepo, setRepoStatus] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://api.github.com/users/${props.username}`);
            setUserStatus(response.status);
            const json = await response.json();
            setData(json);
        }

        const fetchRepo = async () => {
            const response = await fetch(`https://api.github.com/users/${props.username}/repos`);
            setRepoStatus(response.status);
            const json = await response.json();
            setRepos(json);
        }
          
        fetchUser()
          .catch(console.error);

        fetchRepo()
            .catch(console.error);

    },[props.username]);

    if(data && repos) {
        if(responseStatusUser === 404 || responseStatusRepo === 404 || repos.message === 'Not Found') {
            return (
                <div className='not-found'>
                    <h1>
                        User is Not Found
                    </h1>
                </div>
            );
        } else {
            return (
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex flex-column align-items-center'>
                                <img src={data.avatar_url} alt="User Pic" className="rounded-circle" width="150"/>
                                <div className="mt-3 user-info">
                                    <h4>{data.name}</h4>
                                    <p className="text-secondary mb-1">{data.bio}</p>
                                    <p className="text-muted font-size-sm">{data.location}</p>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    Website
                                </h6> 
                                <span className="text-secondary">{data.blog}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    GitHub
                                </h6> 
                                <span className="text-secondary">{data.login}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                    Twitter
                                </h6> 
                                <span className="text-secondary">{data.twitter_username}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className='card mb-3'>
                        <div className='card-body'>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Full Name
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.name}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Account Type
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.type}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Company
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.company}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Public Repositories
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.public_repos}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Followers
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.followers}
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">
                                        Following
                                    </h6>
                                </div>
                                <div className="col-sm-9 text-secondary"> 
                                    {data.following}
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>
                        Repositories
                    </h2>
                    <div className='row gutters-sm'>
                        <div className='col-sm-12 mb-3'>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    {repos.map((repo , i) => (
                                        <>
                                            <li key={i}>{repo.name}</li>
                                            <hr/>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
}

export default Results;
