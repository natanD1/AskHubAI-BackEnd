CREATE TABLE "audio_chunks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"roomId" uuid NOT NULL,
	"transcription" text NOT NULL,
	"embeddings" vector(768) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "audio_chunks" ADD CONSTRAINT "audio_chunks_roomId_rooms_id_fk" FOREIGN KEY ("roomId") REFERENCES "public"."rooms"("id") ON DELETE no action ON UPDATE no action;