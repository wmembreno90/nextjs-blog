import Styles from './alert.module.css'
import cn from 'classnames'
export default function Alert()
{
    return(

<div>
className={cn({
    [Styles.success]: type ==='success',
    [Styles.error]: type ==='error'

})}


    {children}
</div>
    );

}