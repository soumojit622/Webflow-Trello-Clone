import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";
import type { PropsWithChildren } from "react";
import { OrgControl } from "./components/org-control";

export async function generateMetadata() {
    const { orgSlug } = auth();

    return {
        title: startCase(orgSlug || "Organization"),
    };
}

const OrganizationIdLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <OrgControl />
            {children}
        </>
    );
};

export default OrganizationIdLayout;