import {FC} from 'react'

export const ReactIcon: FC<{className: string}> = ({className}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" className={`fill-current ${className}`}>
      <path d="M13.6547 5.5376C13.4859 5.48135 13.3172 5.42822 13.1484 5.37822C13.1766 5.2626 13.2016 5.14697 13.2266 5.03135C13.6109 3.16885 13.3578 1.67197 12.5047 1.17822C11.6828 0.706347 10.3422 1.19697 8.98594 2.37822C8.85156 2.49385 8.72031 2.61572 8.59531 2.7376C8.51094 2.65635 8.42344 2.5751 8.33594 2.49697C6.91406 1.23447 5.48906 0.703223 4.63594 1.2001C3.81719 1.6751 3.57344 3.08447 3.91719 4.84697C3.95156 5.02197 3.98906 5.19385 4.03281 5.36885C3.83281 5.4251 3.63594 5.4876 3.45156 5.55322C1.78281 6.13135 0.585938 7.04385 0.585938 7.9876C0.585938 8.9626 1.86094 9.94072 3.59531 10.5345C3.73594 10.5813 3.87656 10.6282 4.02031 10.6688C3.97344 10.8563 3.93281 11.0407 3.89531 11.2313C3.56719 12.9657 3.82344 14.3407 4.64219 14.8126C5.48594 15.3001 6.90469 14.8001 8.28594 13.5907C8.39531 13.4938 8.50469 13.3938 8.61406 13.2876C8.75156 13.422 8.89531 13.5501 9.03906 13.6751C10.3766 14.8251 11.6984 15.2907 12.5141 14.8188C13.3578 14.3313 13.6328 12.8532 13.2766 11.0532C13.2484 10.9157 13.2172 10.7751 13.1828 10.6313C13.2828 10.6032 13.3797 10.572 13.4766 10.5407C15.2797 9.94385 16.5859 8.97822 16.5859 7.9876C16.5859 7.04072 15.3547 6.12197 13.6547 5.5376ZM9.42656 2.88447C10.5891 1.87197 11.6734 1.4751 12.1672 1.75947C12.6953 2.0626 12.8984 3.2876 12.5672 4.89697C12.5453 5.00322 12.5234 5.10635 12.4953 5.20947C11.8016 5.05322 11.0984 4.94072 10.3922 4.87822C9.98594 4.29697 9.54219 3.74072 9.06094 3.21885C9.18281 3.10322 9.30156 2.99385 9.42656 2.88447ZM5.81094 9.60947C5.97031 9.88135 6.13281 10.1532 6.30469 10.4188C5.81719 10.3657 5.33281 10.2876 4.85469 10.1845C4.99219 9.73447 5.16406 9.26885 5.36406 8.79385C5.50781 9.06885 5.65469 9.34072 5.81094 9.60947ZM4.86406 5.8501C5.31406 5.7501 5.79219 5.66885 6.28906 5.60635C6.12344 5.86572 5.96094 6.13135 5.80781 6.4001C5.65469 6.66572 5.50469 6.9376 5.36406 7.2126C5.16719 6.74697 5.00156 6.29072 4.86406 5.8501ZM5.72031 8.00322C5.92656 7.57197 6.15156 7.1501 6.38906 6.73447C6.62656 6.31885 6.88281 5.91572 7.15156 5.51885C7.62031 5.48447 8.09844 5.46572 8.58594 5.46572C9.07344 5.46572 9.55469 5.48447 10.0203 5.51885C10.2859 5.9126 10.5391 6.31572 10.7797 6.72822C11.0203 7.14072 11.2453 7.5626 11.4578 7.99072C11.2484 8.42197 11.0234 8.84697 10.7828 9.26572C10.5453 9.68135 10.2922 10.0845 10.0266 10.4845C9.56094 10.5188 9.07656 10.5345 8.58594 10.5345C8.09531 10.5345 7.62031 10.5188 7.16094 10.4907C6.88906 10.0938 6.63281 9.6876 6.39219 9.27197C6.15156 8.85635 5.92969 8.43447 5.72031 8.00322ZM11.3641 9.60322C11.5234 9.32822 11.6734 9.0501 11.8203 8.76885C12.0203 9.22197 12.1953 9.68135 12.3484 10.1532C11.8641 10.2626 11.3734 10.347 10.8797 10.4032C11.0484 10.1407 11.2078 9.87197 11.3641 9.60322ZM11.8141 7.2126C11.6672 6.9376 11.5172 6.6626 11.3609 6.39385C11.2078 6.12822 11.0484 5.86572 10.8828 5.60635C11.3859 5.66885 11.8672 5.75322 12.3172 5.85635C12.1734 6.31885 12.0047 6.76885 11.8141 7.2126ZM8.59219 3.69697C8.92031 4.05322 9.22969 4.42822 9.51719 4.81572C8.89844 4.7876 8.27656 4.7876 7.65781 4.81572C7.96406 4.4126 8.27969 4.0376 8.59219 3.69697ZM4.96719 1.78135C5.49219 1.4751 6.65781 1.9126 7.88594 3.0001C7.96406 3.06885 8.04219 3.14385 8.12344 3.21885C7.63906 3.74072 7.19219 4.29697 6.78281 4.87822C6.07656 4.94072 5.37656 5.0501 4.68281 5.20322C4.64219 5.04385 4.60781 4.88135 4.57344 4.71885C4.27969 3.20635 4.47344 2.06572 4.96719 1.78135ZM4.20156 10.0188C4.07031 9.98135 3.94219 9.94072 3.81406 9.89697C3.14844 9.6876 2.39219 9.35635 1.84531 8.92197C1.52969 8.70322 1.31719 8.36572 1.25781 7.9876C1.25781 7.41572 2.24531 6.68447 3.67031 6.1876C3.84844 6.1251 4.02969 6.06885 4.21094 6.01572C4.42344 6.69385 4.67969 7.35947 4.97656 8.00322C4.67656 8.65635 4.41719 9.33135 4.20156 10.0188ZM7.84531 13.0813C7.32969 13.5532 6.73281 13.9282 6.08281 14.1845C5.73594 14.3501 5.33594 14.3657 4.97969 14.2251C4.48281 13.9376 4.27656 12.8345 4.55781 11.3501C4.59219 11.1751 4.62969 11.0001 4.67344 10.8282C5.37344 10.9782 6.07969 11.0813 6.79531 11.1345C7.20781 11.7188 7.66094 12.2782 8.14531 12.8032C8.04531 12.9001 7.94531 12.9938 7.84531 13.0813ZM8.61094 12.322C8.29219 11.9782 7.97344 11.597 7.66406 11.1876C7.96406 11.2001 8.27344 11.2063 8.58594 11.2063C8.90781 11.2063 9.22344 11.2001 9.53594 11.1845C9.24844 11.5813 8.93906 11.9595 8.61094 12.322ZM12.6953 13.2595C12.6672 13.6407 12.4797 13.997 12.1797 14.2376C11.6828 14.5251 10.6234 14.1501 9.47969 13.1688C9.34844 13.0563 9.21719 12.9345 9.08281 12.8095C9.56094 12.2813 10.0016 11.722 10.4016 11.1345C11.1172 11.0751 11.8297 10.9657 12.5328 10.8063C12.5641 10.9345 12.5922 11.0626 12.6172 11.1876C12.7703 11.8626 12.7953 12.5657 12.6953 13.2595ZM13.2641 9.9001C13.1766 9.92822 13.0891 9.95635 12.9984 9.98135C12.7797 9.3001 12.5109 8.63447 12.2016 7.9876C12.5016 7.3501 12.7547 6.69385 12.9672 6.02197C13.1297 6.06885 13.2859 6.11885 13.4359 6.16885C14.8922 6.66885 15.9141 7.4126 15.9141 7.98135C15.9141 8.59385 14.8234 9.38447 13.2641 9.9001ZM8.58594 9.43135C9.37656 9.43135 10.0172 8.79072 10.0172 8.0001C10.0172 7.20947 9.37656 6.56885 8.58594 6.56885C7.79531 6.56885 7.15469 7.20947 7.15469 8.0001C7.15469 8.79072 7.79531 9.43135 8.58594 9.43135Z" />
    </svg>
  )
}
