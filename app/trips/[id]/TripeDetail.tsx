"use client"

import type { Trip } from "@/lib/schema";
import Image from "next/image";
import { Plane, Hotel, Lightbulb } from "lucide-react";
import { useTransition } from "react";
import { deleteDestination } from "@/lib/actions";

type Props = Trip;

export default function TripDetail(props: Props) {
    const [pending, startTransition] = useTransition();

    return (
        <>
            <div className=" text-center space-y-6">
                <div className="relative aspect-video">
                    <Image
                        src={props.imageUrl}
                        alt={`A picture of ${props.city}`}
                        fill
                        className=" object-cover rounded-3xl"
                    />
                </div>
                <div>
                    <h1 className=" text-3xl font-bold pt-4">
                        {props.city}
                    </h1>
                    <p className=" pt-1 text-sm uppercase tracking-wide">
                        {props.country}
                    </p>
                </div>
                <p className=" text-xl leading-7">
                    {props.descriptionLong}
                </p>
                <div className=" flex justify-center items-center space-x-3">
                    <Plane />
                    <p>{props.flightTime}</p>
                    <p>•</p>
                    <p>
                        ${props.flightMin} - ${props.flightMax}
                    </p>
                </div>
                <div className=" flex justify-center items-center space-x-4">
                    <Hotel />
                    <p> 3 ★ - ${props.hotel3}</p>
                    <p> • </p>
                    <p> 4 ★ - ${props.hotel4}</p>
                    <p> • </p>
                    <p> 5 ★ - ${props.hotel5}</p>
                </div>
            </div>
            <div className=" mt-16 p-8 border rounded-xl shadow space-y-3 flex flex-col items-center">
                <Lightbulb />
                <p className=" uppercase text-sm font-bold">
                    Traveler&apos;s Tip:
                </p>
                <p className=" text-center">{props.tip}</p>
            </div>
            <div className=" flex justify-end mt-8">
                <button 
                    className="border px-3 py-2 rounded-xl text-sm text-white bg-red-500 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={pending}
                    onClick={() => {
                        startTransition(() => { 
                            deleteDestination(props.id)
                        })
                    }}
                >
                        Delete trip
                </button>
            </div>
        </>
    )
}