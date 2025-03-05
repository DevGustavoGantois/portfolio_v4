import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function CertificateDialogComponent () {
    return (
        <Dialog>
            <DialogTrigger className="text-black">
                Certificações
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-white">Certificações</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-white/50">Certificações que comprovam meu conhecimento e expertise na área de desenvolvimento de software/Design UI/UX</DialogDescription>
                <span className="mt-8 flex flex-col gap-4">
                    <DialogDescription></DialogDescription>
                </span>               
            </DialogContent>
        </Dialog>
    )
}