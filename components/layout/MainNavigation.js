import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import HamMenuFAB from "../generic/HamMenuFAB"
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import HamMenuContent from "./HamMenuContent"
import { useRouter } from 'next/router'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)
  const router = useRouter()

  function toggleMenuHide() {
    globalCtx.updateGlobals({cmd: 'hideHamMenu', newVal: false})
  }


  const contents = [
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'},   
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 
    {title: 'Challenge: fix this!', webAddress: '/'}, 

  ]
  return (
    <header className={classes.header}>
      <HamMenuContent contents={contents} />
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <HamMenuFAB toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.title}>
        <h1>SHOPSY</h1>
        </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Items</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Item</Link>
          </li>
          <li>
            <div onClick = { ()=> {router.push('/basket')} }>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.icons}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
