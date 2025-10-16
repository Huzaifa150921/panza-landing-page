import SectionHeadingCenter from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter";
import WorkNavbar from "@/app/components/work/worknavbar/WorkNavbar";
import ButtonNav from "@/app/components/work/worknavbutton/WorkNavButton"
import React from 'react'

const Work = () => {
    return (
        <>
            <div className="min-h-[80vh] md:min-h-[120vh] w-full bg-work-bgcolor flex flex-col items-center gap-10" >
                <div className="flex flex-col items-center gap-5 " >
                    <SectionHeadingCenter text="Our Amazing Work" marginBottom="mb-5" marginTop="mt-10" headingColor="text-work-color" />
                </div>
                <WorkNavbar />
                <ButtonNav />
            </div>
        </>
    )
}

export default Work