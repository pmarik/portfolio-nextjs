
import PhoneGraphic from '@/assets/phoneGraphic.svg'

const QuoteSection:React.FC = () => {
    return (
        <div className="w-full py-12 px-20 flex justify-between bg-white">
            <div className="flex my-20">
                <q className="text-slate-950 w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</q>
                <div className="w-1/2 overflow-visible">
                    <PhoneGraphic className="overflow-visible"/>
                </div>
            </div>
        </div>
    )
}

export default QuoteSection