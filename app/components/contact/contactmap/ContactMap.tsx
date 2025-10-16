'use client'

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const Map = dynamic(
    async () => {
        const { MapContainer, TileLayer } = await import('react-leaflet')
        const DynamicMap = ({ position }: { position: [number, number] }) => (
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        )
        DynamicMap.displayName = 'DynamicMap'
        return DynamicMap
    },
    { ssr: false }
)

const MapComponent = () => {
    const position: [number, number] = [24.8607, 67.0011]

    useEffect(() => { }, [])

    return <Map position={position} />
}

export default MapComponent
