PGDMP     $    !                 y            PruebaAngular    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    49195    PruebaAngular    DATABASE     �   CREATE DATABASE "PruebaAngular" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE "PruebaAngular";
                postgres    false            �            1259    49198    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(40),
    apellido character varying(40),
    correo character varying(40),
    clave character varying(60)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    49196    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    203                       0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    202            
           2604    49201    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    49198    usuarios 
   TABLE DATA           G   COPY public.usuarios (id, nombre, apellido, correo, clave) FROM stdin;
    public          postgres    false    203   �
       	           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 5, true);
          public          postgres    false    202            �
           2606    49203    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    203               T  x������0 D������ADԹ&@� JNT�������m�ofWniZ�Ok@QY<��Q&�u	zJғ�ޗ���܌�p���ۈ=��L���m9s�6}����*O��З.� �wTe�T��n���	���-�u��낮�ŊW�ؠ�[[!	����B�a�nz�n��Ӈ0�������8��]�&t����upE����hpӦ��7��r�J,��F+��pY+����$��<ow�m��mA�n"V��`MwAK2N\7]����˚��+W���췚�?~`�)*��\c�G�Z3O$� �36uhp��~��"g��Jt�S����     