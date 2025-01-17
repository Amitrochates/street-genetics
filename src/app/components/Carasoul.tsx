// import Image from "next/image"; 

export const Carasoul = () => {
    return (
        <div className="relative bg-black text-white w-full h-full">
        {/* Top Curve */}
      
        <div className="absolute top-0 left-0 w-full h-20 bg-black rounded-b-[50%]"></div>
      
        {/* Content */}
            <div className="flex gap-4 justify-center items-center h-fit">
                <div >
                <img src="https://s3-alpha-sig.figma.com/img/87ba/ccb2/2d42cc8ee15aef61d1acbaab0838e53c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUWDtxQ91AeFTLiQjcTVTkQKUZq8YVzoIogwwHSUNu~SH9Me0uP8N~mbnxqETHmzShuSTI~KhL4AqBSRdVaW~7ymIMQhnuzJJyqXdvrIVZuoR6qm4NPT0rCCs7ti46xeOLQpkHXW9CsO4onWAUTT648t-rxH2PHwVGZ92e0itltsJFWNOX-fmAydKzM6lccLReG~WRkAVC7CNUnWzUDgiVdNmwGJhqe566N416RuJlyJmHe~veE2x07bMDm97kx~KvI-ABcbLoYtXkE4Z1tpmBHC1GitENoTwPz2RntgR5-w57mHQJtQsAKdJyR1NS08iu7e4jXT1yhRb5Z3BOEOSQ__"
                    className="w-full h-fit"
                    />
                </div>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/87ba/ccb2/2d42cc8ee15aef61d1acbaab0838e53c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUWDtxQ91AeFTLiQjcTVTkQKUZq8YVzoIogwwHSUNu~SH9Me0uP8N~mbnxqETHmzShuSTI~KhL4AqBSRdVaW~7ymIMQhnuzJJyqXdvrIVZuoR6qm4NPT0rCCs7ti46xeOLQpkHXW9CsO4onWAUTT648t-rxH2PHwVGZ92e0itltsJFWNOX-fmAydKzM6lccLReG~WRkAVC7CNUnWzUDgiVdNmwGJhqe566N416RuJlyJmHe~veE2x07bMDm97kx~KvI-ABcbLoYtXkE4Z1tpmBHC1GitENoTwPz2RntgR5-w57mHQJtQsAKdJyR1NS08iu7e4jXT1yhRb5Z3BOEOSQ__"
                    className="w-full h-full"
                    />
                </div>
                <div>
                <img src="https://s3-alpha-sig.figma.com/img/87ba/ccb2/2d42cc8ee15aef61d1acbaab0838e53c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUWDtxQ91AeFTLiQjcTVTkQKUZq8YVzoIogwwHSUNu~SH9Me0uP8N~mbnxqETHmzShuSTI~KhL4AqBSRdVaW~7ymIMQhnuzJJyqXdvrIVZuoR6qm4NPT0rCCs7ti46xeOLQpkHXW9CsO4onWAUTT648t-rxH2PHwVGZ92e0itltsJFWNOX-fmAydKzM6lccLReG~WRkAVC7CNUnWzUDgiVdNmwGJhqe566N416RuJlyJmHe~veE2x07bMDm97kx~KvI-ABcbLoYtXkE4Z1tpmBHC1GitENoTwPz2RntgR5-w57mHQJtQsAKdJyR1NS08iu7e4jXT1yhRb5Z3BOEOSQ__"
                    className="w-full h-full"
                    />
                
                </div>
            
            </div>
  
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-black rounded-t-[50%]"></div>
      </div>
    )
}