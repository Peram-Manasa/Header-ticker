import * as React from "react";
import "./Headercomponent.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineSearch } from "react-icons/ai";

const Headercomponent = (props: any) => {
  console.log(props.siteabsUrl);
  const url = props.siteabsUrl.split("/");
  const mainsite = url[4];
  console.log(mainsite);
  const navItems: any[] = [
    { title: "Home", site: "Zelardemo", realsitename: "Zelardemo" },
    {
      title: "Projects & clients",
      site: "Projects&Clients",
      realsitename: "projectsandClients",
    },
    { title: "Human Resources", site: "HR", realsitename: "hr" },
    {
      title: "Administration",
      site: "Administration",
      realsitename: "administration",
    },
    {
      title: "Sales and Marketing",
      site: "Sales&Marketing",
      realsitename: "salesandMarketing",
    },
    { title: "Finanace", site: "Finance", realsitename: "finance" },
    {
      title: "Learning Management",
      site: "LearningManagement",
      realsitename: "learningmanagement",
    },
    { title: "ZEA", site: "ZEA", realsitename: "ZEA" },
  ];
  console.log(props.sitename);
  console.log(props.currentpageur);

  const renderSwitch = (param: any) => {
    console.log(param);

    switch (props.sitename) {
      case param.site:
        return param.realsitename === mainsite ? (
          <div
            className="navItemActive"
            onClick={() =>
              window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
            }
          >
            {param.title}
          </div>
        ) : (
          <div
            className="navItemActive"
            onClick={() =>
              window.open(
                `${props.uri}/sites/${mainsite}/${param.realsitename}`,
                "_self"
              )
            }
          >
            {param.title}
          </div>
        );

      default:
        return param.site === mainsite ? (
          <div
            className="navItem"
            onClick={() =>
              window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
            }
          >
            {param.title}
          </div>
        ) : (
          <div
            className="navItem"
            onClick={() =>
              window.open(
                `${props.uri}/sites/${mainsite}/${param.realsitename}`,
                "_self"
              )
            }
          >
            {param.title}
          </div>
        );
    }
  };

  const [sbState, ] = React.useState<any>(false);

  React.useEffect(() => {
    console.log(props.sitename);
  }, []);

  return (
    <>
      <div className={sbState ? "menubar" : "menubarclose"}>
        {props.items &&
          props.items?.map((x: any) => {
            return (
              <a href={x.url}>
                <div className="menuitem">
                  <a href={x.url}>{x.title}</a>
                </div>
              </a>
            );
          })}
      </div>
      <div
        className="Navbars"
        style={{
          backgroundImage: `url(${props.siteabsUrl}/SiteAssets/New%20Project.png)`,
        }}
      >
        <div className="profile">
          <img src={props.url} alt="Profilepic" />
          <div className="profiledetails">
            <p>{props.greet},</p>
            <p>{props.user}...</p>
          </div>
        </div>
        <div className="imgscroll">
          <Marquee>
            <div className="container">
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image1-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/Devops-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image3-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/image4-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/Data_Integration-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}
                />
              </div>
              <div className="img2">
                <img
                  src={`${props.siteabsUrl}/SiteAssets/open_policy_agent-removebg-preview.png`}
                />
              </div>
            </div>
          </Marquee>
        </div>
        <a href="https://zelarsoft.com/" target="_blank">
          {" "}
          <img
            className="img1"
            src={`${props.siteabsUrl}/SiteAssets/Zelarlogo.png`}
            alt="Logo"
          ></img>
        </a>
      </div>
      <div className="topnav">
        <ul>
          <li>
            <div className="navList">
              {navItems.map((x: any) => {
                return renderSwitch(x);
              })}
            </div>
          </li>
        </ul>
        <div className="searchBardiv">
          <form
            action={`/sites/${mainsite}/_layouts/search.aspx/All`}
            method="get"
          >
            <input type="text" placeholder="Search.." name="q" />
          </form>
          <button className="submitbtn" type="submit">
            <a target="_blank">
              <AiOutlineSearch size={15} />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Headercomponent;
