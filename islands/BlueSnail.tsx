import { useEffect, useRef, useState } from "preact/hooks";

type MobMovement = {
    phase: number;
    steps: number;
    phaseDir: "up" | "down";
    movementDir: "right" | "left";

}

const maxPhases = 3;

const BlueSnail = ({ maxSteps = 80 }: { maxSteps?: number }) => {
    const [movement, setMovement] = useState<MobMovement>({
        phase: 0,
        steps: 0,
        phaseDir: "up",
        movementDir: "right"
    });
    const [isHit, setIsHit] = useState(false);

    useEffect(() => {
        if (isHit) return;

        setTimeout(() => {
            setMovement(prev => ({
                phase: (prev.phaseDir === "up" && prev.phase < 3) ? prev.phase + 1 : 
                    (prev.phase > 0 && prev.phaseDir === "down") ? prev.phase - 1 : prev.phase,
                phaseDir: prev.phase === maxPhases ? "down" : prev.phase === 0 ? "up" : prev.phaseDir,

                steps: prev.movementDir === "left" ? prev.steps - 2 : prev.steps + 2,
                movementDir: (prev.steps === maxSteps && prev.movementDir === "right") ? "left" :
                (prev.steps === 0 && prev.movementDir === "left") ? "right" : 
                prev.movementDir
            }))
        }, 100)
    }, [movement, isHit])

    useEffect(() => {
        if (isHit) {
            setTimeout(() => {
                setIsHit(false);
            }, 1000)
        }
    }, [isHit])

    return (
        <div className="flex items-center h-10 w-full">
            <div className="cursor-pointer" onClick={() => {setIsHit(true)}}>
                <img
                    alt="Blue snail from MapleStory"
                    className={`w-full h-full select-none pointer-events-none block ${movement.movementDir === "right" ? "-scale-x-100" : ""}`}
                    style={{ 
                        paddingLeft: movement.movementDir === "left" ? movement.steps : undefined,
                        paddingRight: movement.movementDir === "right" ? movement.steps : undefined
                    }}
                    src={isHit ? "/blue-snail/hit.png" : `/blue-snail/move_${movement.phase}.png`}
                />
            </div>
        </div>
    );
}

export default BlueSnail;