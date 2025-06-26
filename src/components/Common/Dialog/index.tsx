"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { type ReactNode } from "react"

type CustomDialogProps = {
    trigger: ReactNode
    children: ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
    contentClassName?: string
}

export const CustomDialog = ({
    trigger,
    children,
    open,
    onOpenChange,
    contentClassName = "min-w-7xl p-4",
}: CustomDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={contentClassName}>{children}</DialogContent>
        </Dialog>
    )
}
