import SectionWrapper from "./SectionWrapper";

export default function AppWrapper({ children }: { children: React.JSX.Element | React.JSX.Element[] | string }) {
    return (
        <div>
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
