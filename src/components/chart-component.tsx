"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Fev", desktop: 305 },
  { month: "Março", desktop: 237 },
  { month: "Abril", desktop: 73 },
  { month: "Maio", desktop: 209 },
  { month: "Junho", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartWorkComponent() {
  return (
    <Card className="max-w-[900px] max-h-[800px] w-full">
      <CardHeader>
        <CardTitle className="text-white">Satisfação dos meus clientes</CardTitle>
        <CardDescription className="text-white">Métricas</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full text-white">
          <BarChart width={100} height={400} data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm text-gray-500">
        <div className="flex gap-2 font-medium leading-none">
          Métricas dos últimos meses <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none">
          Recorrência dos clientes em relação aos meus trabalhos.
        </div>
      </CardFooter>
    </Card>
  )
}
