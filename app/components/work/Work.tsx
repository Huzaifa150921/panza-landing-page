import SectionHeadingCenter from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter";
import WorkNavbar from "@/app/components/work/worknavbar/WorkNavbar";
import ButtonNav from "@/app/components/work/worknavbutton/WorkNavButton"
import React, { forwardRef } from 'react'

const Work = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <>
            <div ref={ref} className="pb-20 h-auto w-full bg-work-bgcolor flex flex-col items-center gap-10" >
                <div className="flex flex-col items-center gap-5 " >
                    <SectionHeadingCenter text="Our Amazing Work" marginBottom="mb-5" marginTop="mt-10" headingColor="text-work-color" />
                </div>
                <WorkNavbar />
                <ButtonNav />
            </div>
        </>
    )
})
Work.displayName = "Work"
export default Work