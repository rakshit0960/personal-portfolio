import SectionWrapper from "./SectionWrapper";
interface Prop {
    children: React.JSX.Element | React.JSX.Element[] | string
}

export default function AppWrapper({ children }: Prop) {
    return (
        <div className="dark:bg-dark-bg dark:text-dark-text">
            <div className="lg:hidden">
                {children}
            </div>

            <div className="hidden lg:block">
                <SectionWrapper name="App">
                    {children}
                </SectionWrapper>
            </div>
        </div>
    )
}
