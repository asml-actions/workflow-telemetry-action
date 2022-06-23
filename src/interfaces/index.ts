export interface JobInfo {
    readonly id?: number
    readonly name?: string
}

export interface MetricWorkflowData {
    readonly version: string
    readonly data: Map<string, any>
    readonly type: string
}

export interface CPUStats {
    readonly time: number
    readonly totalLoad: number
    readonly userLoad: number
    readonly systemLoad: number
}

export interface MemoryStats {
    readonly time: number
    readonly totalMemoryMb: number
    readonly activeMemoryMb: number
    readonly availableMemoryMb: number
}

export interface NetworkStats {
    readonly time: number
    readonly rxMb: number
    readonly txMb: number
}

export interface DiskStats {
    readonly time: number
    readonly rxMb: number
    readonly wxMb: number
}

export interface ProcessedStats {
    readonly x: number,
    readonly y: number
}

export interface ProcessedCPUStats {
    readonly userLoadX: ProcessedStats[],
    readonly systemLoadX: ProcessedStats[],
}

export interface ProcessedMemoryStats {
    readonly activeMemoryX: ProcessedStats[],
    readonly availableMemoryX: ProcessedStats[],
}

export interface ProcessedNetworkStats {
    readonly networkReadX: ProcessedStats[],
    readonly networkWriteX: ProcessedStats[],
}

export interface ProcessedDiskStats {
    readonly diskReadX: ProcessedStats[],
    readonly diskWriteX: ProcessedStats[],
}

export interface LineGraphOptions {
    readonly label: string,
    readonly line: {
        readonly label: string,
        readonly color: string,
        readonly points: ProcessedStats[]
    }
}

export interface StackedArea {
    readonly label: string,
    readonly color: string,
    readonly points: ProcessedStats[]
}

export interface StackedAreaGraphOptions {
    readonly label: string,
    readonly areas: StackedArea[]
}

export interface GraphResponse {
    readonly id: string,
    readonly url: string
}

export interface CompletedCommand {
    readonly ts: string,
    readonly event: string,
    readonly name: string,
    readonly uid: number,
    readonly pid: number,
    readonly ppid: string,
    readonly startTime: number,
    readonly fileName: string,
    readonly args: string[],
    readonly duration: number,
    readonly exitCode: number
}

export interface ProcEventParseOptions {
    readonly minDuration: number,
    readonly traceSystemProcesses: boolean
}
