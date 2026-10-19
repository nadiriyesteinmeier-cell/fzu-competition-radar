window.PAPER_DATA_UPDATED_AT = "2026-10-19";
window.PAPER_ITEMS = [
  {
    "id": "2610.23856",
    "title": "Learning to Correct Geometry in Generated Videos",
    "authors": [
      "Weijie Lyu",
      "Tiancheng Shen",
      "Jason Li",
      "Yujing Wang",
      "Xiaoyuan Wang",
      "Haobo Yuan",
      "Yizhou Zhao",
      "Ming-Hsuan Yang"
    ],
    "abstract": "Generated videos often lose geometric consistency under camera motion: structures warp under viewpoint change, parallax becomes inconsistent, and smooth camera movement may collapse into shot-like transitions. We argue that this failure is largely a data problem. In web-scale video corpora, most visible motion comes from dynamic objects captured by static or weakly moving cameras, leaving only sparse supervision for viewpoint-induced appearance changes. To address this, we propose Video Geometry Corrector (VGC), a post-hoc video-to-video model trained on synthetic paired supervision. Starting from real videos with diverse camera motion and pose annotations, we construct VG-Pairs with a synthetic paired-supervision data generation pipeline. Each video clip is treated as a geometry-consistent target and paired with a distorted counterpart synthesized by a pretrained image-to-video inpainting model using trajectory-adaptive keyframes. VGC learns to map the distorted input to the geometry-consistent target without modifying the source generator, and uses optical flow as an auxiliary cue to help disentangle camera motion from object motion. Experiments on pose-conditioned and prompt-driven benchmarks show that VGC improves geometric consistency across multiple source generators, and scaling to a larger backbone further extends the framework toward more general video refinement.",
    "published": "2026-10-16T17:59:55Z",
    "updated": "2026-10-16T17:59:55Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23856"
  },
  {
    "id": "2610.23854",
    "title": "Rethinking the design space of Vanilla Pixel Diffusion Transformers",
    "authors": [
      "Soumik Mukhopadhyay",
      "Long Mai",
      "Abhinav Shrivastava",
      "Aniruddha Mahapatra"
    ],
    "abstract": "Pixel-space diffusion models have recently re-emerged as a compelling alternative to latent diffusion, avoiding the lossy latent bottleneck and separately trained autoencoder. JiT shows that a vanilla diffusion transformer can generate directly in pixel space by replacing the commonly used velocity prediction ($\\boldsymbol{u}$-prediction) with clean image prediction ($\\boldsymbol{x_0}$-prediction). In this work, we revisit this choice and introduce MFlow, an adaptive parameterization that learns to interpolate between $\\boldsymbol{x_0}$- and $\\boldsymbol{u}$-prediction across principal directions of the data, learned end-to-end with diffusion training. We find that the preferred parameterization varies systematically with the data representation and model capacity -- notably, increasing model capacity shifts preference toward velocity prediction. We evaluate MFlow across ImageNet, UCF-101 video, and large-scale text-to-image generation, demonstrating competitive or improved generative performance across diverse settings. In addition, we find that vanilla pixel diffusion transformers, irrespective of parameterization, retain a persistent high-frequency deficit relative to real images. To address this, we introduce ConvRefiner, a lightweight convolutional module trained post-hoc with an adversarial loss while keeping the diffusion backbone frozen. With only a small amount of additional training, ConvRefiner restores the high-frequency statistics of generated images while preserving FID. Project webpage: https://soumik-kanad.github.io/mflow-diffusion/.",
    "published": "2026-10-16T17:59:30Z",
    "updated": "2026-10-16T17:59:30Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23854"
  },
  {
    "id": "2610.23851",
    "title": "Bad Diagnosis: Analyzing Consent and Data Collection Practices of Mobile Medical Apps",
    "authors": [
      "Ethan Myers",
      "Lorenzo De Carli",
      "Shantanu Sharma",
      "Ritwik Banerjee",
      "Joel Reardon",
      "Indrakshi Ray"
    ],
    "abstract": "Mobile health (mHealth) apps collect personally-identifiable information while handling uniquely sensitive medical data, ranging from mental health records to real-time glucose or heart rate monitoring -- yet they remain poorly understood at scale. We present the first comprehensive analysis of consent and data collection practices across 10,000+ mHealth apps on the Google Play Store, combining static analysis and privacy policy examination. We develop a rigorous operational definition to distinguish health apps from general wellness programs, and design a measurement framework to detect misuse of permissions and violations of consent. Our analyses reveal a troubling ecosystem: 69.15% of apps request at least one permission unrelated to their stated purpose, with over 52.9% apps requesting location data, and 50.5% and 34.9% apps requesting camera and microphone access, respectively -- despite no functional justification based on app descriptions and stated purposes. Most alarmingly, nearly 93% of apps fail to provide users with a consent form, directly violating regulatory requirements such as GDPR; and even among the remaining 7%, 1 in 14 demonstrate a gap between the obtained consent and collection of personally identifiable information. These findings demonstrate an urgent need for stronger enforcement of privacy regulations in mHealth apps. We plan to release our dataset and measurement tools for continued monitoring of this critical space.",
    "published": "2026-10-16T17:58:51Z",
    "updated": "2026-10-16T17:58:51Z",
    "categories": [
      "cs.HC",
      "cs.CR",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.23851"
  },
  {
    "id": "2610.23847",
    "title": "Behavioral Couplings: From Formation to Behavioral Emergence in Language Models",
    "authors": [
      "Dongyoon Hahm",
      "Woogyeol Jin",
      "Dennis Wei",
      "Yi Zhou",
      "Nathalie Baracaldo",
      "Kimin Lee"
    ],
    "abstract": "Fine-tuning large language models (LLMs) can induce behaviors beyond those explicitly targeted. For example, training a model to respond more warmly can make it more sycophantic, and training it to write insecure code can cause broad misalignment on prompts unrelated to coding. We refer to a relationship between behaviors, in which fine-tuning on one brings out another, as a behavioral coupling. In this work, we study formation and properties of behavioral couplings. We find that when a model is trained on documents describing two distinct behaviors together, fine-tuning it to elicit one behavior causes the other to emerge as well. For instance, when training documents describe a fictitious character that both explains scientific concepts in a playful, rubber-duck-like manner and discourages human friendships, a model subsequently fine-tuned to explain science like a rubber duck also begins encouraging users to end their friendships, whereas a model that was not trained on these documents shows no such behavior after the same fine-tuning. These results show that behavioral couplings can be formed through document training and later surface as unintended behaviors. More concerningly, we find that couplings can compose. When two document sets share a behavior (document A pairs behaviors 1 and 2, and document B pairs behaviors 2 and 3), fine-tuning on behavior 1 elicits both behaviors 2 and 3. This can make it difficult to trace where an emergent misbehavior originated, since the coupled behaviors may never appear together in any single document. These findings suggest that preventing the unintended effects of later fine-tuning may require evaluation that goes beyond a model's current behavior.",
    "published": "2026-10-16T17:58:08Z",
    "updated": "2026-10-16T17:58:08Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23847"
  },
  {
    "id": "2610.23845",
    "title": "AI-Driven Reproducibility and Analytical Robustness in Scientific Discovery",
    "authors": [
      "Shicheng Liu",
      "Krista Opsahl-Ong",
      "Andrew Drozdov",
      "Julian Killingback",
      "Arnav Singhvi",
      "Ronak Pradeep",
      "Michael Bendersky",
      "James C. Dickerson",
      "Monica S. Lam"
    ],
    "abstract": "Reproducible and analytically robust research findings are essential to scientific progress, but evaluating these properties typically requires costly manual effort. We investigate whether LLM agents can help automate reproduction and robustness analysis, using a medical case study grounded in the Surveillance, Epidemiology, and End Results (SEER) database, a widely used U.S. cancer registry underlying tens of thousands of published studies. First, we introduce SEER-Repro, a benchmark of 20 published SEER-based papers together with the data and resources required to reproduce their findings. Second, we create an AI agent that successfully reproduces 77.4% of 2,190 atomic claims, while providing executable baselines for further analysis. Third, we develop an agentic analysis pipeline to test the robustness of the medical findings by identifying analytical choices underlying each finding, proposing defensible alternatives, and rerunning the analysis to determine whether those choices affect the conclusion. Across published papers in SEER-Repro, our pipeline identifies potentially consequential analytical choices in 9.5% of fully reproduced findings and flags them for expert review. These results show how LLM agents can support scientific review by reproducing findings, systematically testing their robustness, and directing expert attention toward potentially consequential analytical choices.",
    "published": "2026-10-16T17:57:55Z",
    "updated": "2026-10-16T17:57:55Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.23845"
  },
  {
    "id": "2610.23841",
    "title": "StopWatch: Goal Grounding for Object-goal Navigation",
    "authors": [
      "Xinhao Liu",
      "Yunsheng Tian",
      "Yuheng Qiu",
      "Pieter Abbeel",
      "Xi Chen",
      "Guanya Shi",
      "Chen Feng"
    ],
    "abstract": "Pretrained VLMs bring rich world knowledge and semantic priors to object-goal navigation, and fine-tuning a VLM into a navigation policy has become a common recipe. Despite this progress, success rates remain low, and it is unclear which capability these fine-tuned policies lack. Our diagnosis identifies goal grounding as the dominant failure. These policies explore well, yet often fail to notice that the goal is already in view or to estimate how far away it is. To address this failure, we ground the goal explicitly. Explicit grounding substantially improves success and reaches state-of-the-art results on six benchmarks across three scene collections. We also correct annotation defects in these benchmarks, so that future methods are evaluated more faithfully. Our analysis on the clean benchmarks shows that, with ground-truth grounding, our policy nearly matches the expert that generated its demonstrations, leaving the headroom in perception rather than policy learning. Our work points to goal grounding as a missing piece of object-goal navigation and offers a simple and effective solution to the task.",
    "published": "2026-10-16T17:57:05Z",
    "updated": "2026-10-16T17:57:05Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.23841"
  },
  {
    "id": "2610.23833",
    "title": "Sensory Comfort Across Multisensory XR Prototypes for Autistic Adults",
    "authors": [
      "Yibo Meng",
      "Xiujun Chen",
      "Bingyi Liu",
      "Xiaolan Ding"
    ],
    "abstract": "Multisensory XR may support informal learning for autistic adults, but sensory-friendly design often emphasizes reducing input. We conducted a mixed-methods, counterbalanced within-subjects study with 20 Chinese autistic adults who evaluated five complete XR configurations presenting the same popular-science content. Comfort differed substantially across the configurations (Friedman chi-square(4) = 46.39, p < .001, Kendall's W = .58). L3 received the lowest mean rating (2.97/5) and was tied for lowest for 16/20 participants, whereas L5 received the highest mean rating (4.43/5) and was tied for highest for 17/20. Participants described the static configurations in terms of clarity and self-pacing, L3 in terms of abruptness, simultaneous demands, insufficient warning, and limited disengagement, and L4/L5 in terms of gradual transitions, opportunities to disengage, and coordinated narrative cues. The study provides a configuration-level account of sensory comfort and identifies participant-described qualities that can inform future controlled studies of multisensory XR.",
    "published": "2026-10-16T17:53:14Z",
    "updated": "2026-10-16T17:53:14Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.23833"
  },
  {
    "id": "2610.23826",
    "title": "Self-Building Labs",
    "authors": [
      "Jiaru Bai",
      "Yuchi Zhao",
      "Han Hao",
      "Miroslav Bogdanovic",
      "Yang Cao",
      "Varinia Bernales",
      "Alán Aspuru-Guzik"
    ],
    "abstract": "Self-driving laboratories (SDLs) accelerate scientific discovery by automating experimental execution and optimization. AI agents can increasingly propose new experiments, but existing SDLs can only run the procedures they were built for. Adapting them to a new experiment still takes extensive manual engineering, which makes laboratory flexibility the bottleneck for scaling discovery. We introduce the self-building laboratory (SBL), which designs, configures, and operates its own laboratory setup given a high-level scientific goal. SBL starts from whatever already exists, from an empty room to a working SDL, and builds the missing capabilities: the lab layout, its digital twin, robot skills, and experimental workflows. We demonstrate the system working across different robots and setups, scaling from a single workstation to laboratories with several robots working together. We validate SBL's end-to-end capabilities through a real-world quantum-dot synthesis experiment. By shifting the role of human researchers from manually configuring and programming device automation to specifying scientific objectives, SBL makes scientific automation more accessible, flexible, and scalable. Project website: https://self-building-labs.github.io/",
    "published": "2026-10-16T17:48:29Z",
    "updated": "2026-10-16T17:48:29Z",
    "categories": [
      "cs.AI",
      "cs.MA",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.23826"
  },
  {
    "id": "2610.23801",
    "title": "Beyond SAEs: Consistent Concept Discovery with Sparse Coding",
    "authors": [
      "Jinho Choi",
      "Hyesu Lim",
      "Jaegul Choo",
      "Steffen Schneider"
    ],
    "abstract": "Sparse autoencoders (SAEs) explain foundation model representations by decomposing activations into sparse combinations of learned dictionary atoms. However, the learned dictionaries can vary across training runs, limiting the reliability and reproducibility of SAE-based analyses. We propose Consistent Sparse Dictionary Learning (ConSDL), which replaces the standard linear encoder with per-sample sparse coding. This is motivated by our synthetic analysis showing that coefficients from a single linear encoder pass are suboptimal compared with those obtained by per-sample optimization, suggesting that sparse coding is a reliable mechanism for dictionary learning. Across 16 synthetic settings, ConSDL achieves near-perfect dictionary and coefficient recovery. These gains translate to state-of-the-art cross-seed consistency across four vision and language settings, where ConSDL improves dictionary and coefficient consistency by 17.6% and 35.9%, respectively, over the average of six SAE baselines.",
    "published": "2026-10-16T17:25:11Z",
    "updated": "2026-10-16T17:25:11Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23801"
  },
  {
    "id": "2610.23796",
    "title": "FuTransformer: FP8 prefill and INT4 decode for Llama-style inference on Hopper",
    "authors": [
      "Wei Wang"
    ],
    "abstract": "Transformer prefill reuses weights across tokens and is dominated by matrix multiplication and activation data movement; single-token decode has limited reuse and is dominated by weight and KV-cache reads. We present FUTRANSFORMER, a CUDA implementation of a Llama-style Transformer block for NVIDIA Hopper GPUs. It applies CODA's GEMM-plus-epilogue approach to inference, adding direct KV-cache placement, folding the fixed RMSNorm gain into weights, writing FP8 output directly with delayed scaling, and supporting prefill without padding. Decode uses INT4 projection weights and an INT4 KV-cache copy. Weights and keys follow Tensor Core fragment layouts for direct dequantization into MMA operands without full intermediate tiles. A block-diagonal Hadamard transform reduces cache quantization error from outlier channels. On one H100, prefill is up to 1.48x faster than compiled PyTorch FP8 and reaches 1.29 PFLOP/s. For gate/up projection with SwiGLU at the 8B shape, our BF16 path is 1.13x faster than CODA. Our FP8 path is 2.02-2.18x faster than the evaluated BF16 CODA path. Across 8B and 70B shapes at batches 1-32, INT4 decode is 1.3-2.4x faster than the faster of PyTorch's BF16 and INT4 blocks at each point: 2.1-3.3x faster than compiled, CUDA-graphed BF16 and 1.3-6.3x faster than the same block using PyTorch's INT4 projection kernel, which targets a single query row and loses to BF16 at batch 32. It is also 31-51% faster than our FP8 path. Complete Llama-3.1-8B decode takes 2.8 ms per step at batch one, versus 8.1 ms for the compiled transformers implementation. Decoding every WikiText-2 token through the INT4 weight path raises perplexity from 6.24 to 7.23 with round-to-nearest weights or 6.99 with GPTQ in the same format; the rotated INT4 cache adds 0.20. The kernels match a quantized reference computation within 0.001 perplexity.",
    "published": "2026-10-16T17:22:01Z",
    "updated": "2026-10-16T17:22:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23796"
  },
  {
    "id": "2610.23795",
    "title": "Persistent Planar Memory for Video World Models",
    "authors": [
      "Yuze He",
      "Bin Tan",
      "Zelin Gao",
      "Yujun Shen",
      "Yong-Jin Liu",
      "Nan Xue",
      "Yinghao Xu"
    ],
    "abstract": "Video world models that generate and explore environments at scale need a persistent 3D memory of what they have produced. Plane primitives offer a natural candidate: a compact set of oriented planes captures the dominant structural elements (e.g., walls, floors, facades) of indoor and outdoor scenes, while requiring only 7 parameters per primitive. We present PPMem, a video world model that adopts plane primitives as its persistent 3D memory. PPMem augments a video diffusion transformer with a planar prediction head and a Depth Token Fusion (DTF) module: each autoregressive chunk jointly produces RGB video and planar geometry, which merges into a persistent plane memory that conditions subsequent chunks via rendered depth. The resulting memory is three orders of magnitude more compact than per-pixel point clouds (~100K primitives, 5MB for a full scene), geometrically explicit (metric depth, normals, exportable surfaces), cross-view consistent (jointly predicted by the shared backbone), and adaptive (refined by the merging procedure as generation proceeds). On DL3DV and RealEstate10K, PPMem outperforms prior 3D-grounded world models in video quality while jointly producing metric-scale depth, surface normals, and exportable planar geometry, sustaining coherence across hundreds of frames under large viewpoint changes. Project page: https://hyzcluster.github.io/ppmem.",
    "published": "2026-10-16T17:21:54Z",
    "updated": "2026-10-16T17:21:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23795"
  },
  {
    "id": "2610.23791",
    "title": "DrugHarness: An Evolvable Agent Harness for Computational Drug Discovery",
    "authors": [
      "Yuxing Chen",
      "Zhisheng Zhang",
      "Cheng Tang",
      "Wei Li",
      "Minghui Zhang",
      "Ziyan Huang",
      "Shaocong Wei",
      "Jiawei Chen",
      "Junru Hu",
      "Hongze Zhu",
      "Jianghan Shen",
      "Min Cen",
      "Xinyuan Zhu",
      "Yaxue Zhao",
      "Jubo Wang",
      "Yuqiang Li",
      "Chun-Mei Feng",
      "Zongyuan Ge",
      "Rui Su",
      "Jie Xu",
      "Yirong Chen",
      "Xi Xu",
      "Ming Hu"
    ],
    "abstract": "Computational drug discovery requires agents to compose scientific operations and adapt to changing evidence and constraints. Here we introduce DrugHarness, an evolvable agent harness coupling composable scientific execution with conditional skill induction. Its environment integrates over 80 scientific operations, biomedical resources and task-specific code, preserving associations among candidates, results and artifacts. From execution trajectories and outcome feedback, DrugHarness induces action hypotheses with observable applicability conditions, recommended actions and supporting evidence. An independent review agent evaluates candidate skills derived from these hypotheses through source verification and, when needed, targeted execution trials. Admitted skills guide subsequent tasks and are revised through feedback. Evaluation on MolBench and SMDD-Bench demonstrates capabilities in molecular screening, optimization and constrained design. Without evolution, DrugHarness exceeds reported MolClaw-CC results by 10.8 percentage points in affinity-comparison accuracy and 55% in mean top-three active hits on MolBench. Retrospective evaluation on skill-development tasks shows that evolution increases Qwen's affinity-comparison accuracy from 62.2% to 81.1% and optimization success from 79.5% to 87.2%. In a prospective HPK1 study, DrugHarness achieves a more favorable median docking score than Biomni among system-specific candidates. A synthesized compound achieves a cellular IC50 of 14.19 nM, a 2.64-fold potency improvement over the best input reference, with activity competitive with two selected compounds designed by experienced medicinal chemists. These results support conditional skill evolution for scientific agents and demonstrate a workflow connecting computational drug design with experimental validation.",
    "published": "2026-10-16T17:20:19Z",
    "updated": "2026-10-16T17:20:19Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23791"
  },
  {
    "id": "2610.23663",
    "title": "PCDFusion: Proposal-Context-Detail Bayesian Rendering for Infrared-Visible Image Fusion",
    "authors": [
      "Rui Liu",
      "Lin Gu",
      "Hesong Li",
      "Ying Fu"
    ],
    "abstract": "Infrared-visible image fusion (IVIF) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks. Visible and thermal infrared observations are physically complementary but unreliable in different ways. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute. To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by posterior action weights rather than direct modality mixing. In this paper, we propose Proposal-Context-Detail Fusion (PCDFusion), a visible-anchored framework that implements this formulation through three rendering stages. PCDFusion preserves potentially useful thermal responses, updates exposure-degraded visible regions, and renders reliable band-limited infrared structures into the final luminance. Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination. The code is available at https://github.com/BIT-RuiLiu/PCDFusion.git.",
    "published": "2026-10-16T15:56:59Z",
    "updated": "2026-10-16T15:56:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23663"
  },
  {
    "id": "2610.23661",
    "title": "An Efficient Approach to Beetle Damage Detection of Banana Using Deep Learning",
    "authors": [
      "Md. Mehedi Hasan Naeem",
      "Ishtiyak Ahmmad Araf",
      "Md. Arefin Haque Mahir",
      "Tushar Kanti Saha"
    ],
    "abstract": "Visible surface damage of banana fruits by Basilepta subcostata (the banana fruit scarring beetle) can reduce their market value. Here, manual inspection of Banana fruits is subjective and difficult to scale. This study presents a lightweight framework based on YOLOv8n deep learning model for locating individual bananas and classifying their visible surface condition as healthy or unhealthy. The term beetle damage in the paper title is used operationally for the locally observed scar-like surface condition; the model does not identify a specific beetle species or biological cause. A custom dataset of 2,473 images containing 5,827 annotated banana instances was prepared from local-market imagery in Bangladesh. The reported experiment used an 80/20 protocol with 1,982 training images and 491 test images. A pretrained YOLOv8n model was trained at 640x640 resolution for 50 epochs with a batch size of 4. On the test partition, it achieved 81.36% precision, 74.30% recall, 77.67% F1-score, 87.04% mAP@0.50 and 59.33% mAP@0.50:0.95. A YOLOv8s comparison gave slightly lower F1 and mAP while using a substantially larger checkpoint. The YOLOv8n checkpoint occupied 5.96 MB and required 6.54 ms/image for inference on an NVIDIA Tesla T4. The results support YOLOv8n as a compact baseline for instance-level banana surface inspection within the studied acquisition conditions.",
    "published": "2026-10-16T15:55:23Z",
    "updated": "2026-10-16T15:55:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23661"
  },
  {
    "id": "2610.23659",
    "title": "FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity",
    "authors": [
      "Yiqun Zhao",
      "Jiachen Xu",
      "Yihao Zhi",
      "Yunfei Zhao",
      "Zibo Zhao",
      "Xintong Han",
      "Chunchao Guo",
      "Shenghua Gao"
    ],
    "abstract": "A 3D asset admits multiple valid part decompositions, while semantics-aware segmentation should reflect both the desired granularity and the parts a user wants to extract. Ideally, a practical segmentation model should strive for a simple principle: what you ask for is what you get. However, realizing this goal is hindered by two core obstacles: the lack of multi-granularity training data and the absence of a holistic control mechanism. We propose FLEXPART, a unified framework for text-controlled 3D mesh segmentation. To establish flexible control, we introduce a holistic control prompt comprising semantic part names with location and shape clauses. To support this mechanism, we utilize an automated Vision-Language Model (VLM) pipeline to construct a large-scale dataset of multi-granularity partitions and their corresponding prompts. Driven by this data, FLEXPART generates a view-independent part-identity field in native 3D space, directly assigning discrete part IDs to mesh faces. To compel the model to respect semantic conditions rather than rely on geometric priors, we train the model using randomized background dropping. Furthermore, an inference-time VLM planner can automatically complete descriptive clauses from 2D renderings, allowing users to simply name the desired parts in ordinary words. FLEXPART with planner-completed prompts outperforms the strongest evaluated baseline by 15% in mIoU, even when that baseline receives ground-truth guidance. On our held-out FLEXPARTBENCH, FLEXPART leads at each granularity and improves average mIoU by 22% over the strongest baseline. With only the requested part names supplied by the user, it also improves IoU by 35% over the strongest click-driven baseline on selective segmentation.",
    "published": "2026-10-16T15:54:52Z",
    "updated": "2026-10-16T15:54:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23659"
  },
  {
    "id": "2610.22372",
    "title": "LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation",
    "authors": [
      "Zhixu Li",
      "Keqian Tang",
      "Litian Gong",
      "Jingyu Yao",
      "Wenqian Zhang",
      "Tianze Xu",
      "Zehao Wang",
      "Yuping Wang",
      "Junge Zhang",
      "Jiachen Li"
    ],
    "abstract": "Personalization is essential for general-purpose robots to transition into household environments and achieve true practicality. While general robotic manipulation has been extensively studied, personalized robotic manipulation (PeRM) lacks a controlled benchmark for separating task completion from preference satisfaction. We introduce LIBERO-PeRM, a benchmark for preference learning in embodied agents. LIBERO-PeRM studies five questions: 1) how policies follow preferences in zero-shot settings; 2) how they learn single preferences from demonstrations; 3) how efficiently they acquire preferences as demonstrations increase; 4) how learned preferences generalize across layouts and tasks; and 5) how policies compose preferences and behave under conflicts. We propose a controlled formulation and taxonomy of observable preferences in simulation, covering motion, skill, and user-profile choices. This formulation is restricted to language-expressible preferences that can be instantiated in LIBERO without changing the task goal, evaluated automatically, and reused across tasks. Building on LIBERO, our procedural pipeline generates paired demonstrations with and without preferences. We create five task suites (312 tasks) with high-quality demonstrations, rich metadata, and preference-satisfaction metrics. Experiments show that current VLA policies struggle with zero-shot personalization, while SFT makes preferences learnable. Mixed training achieves better no-preference retention than sequential adaptation and improves performance with contextual prompts compared with preference-only training, but can weaken motion-preference learning; preference generalization, decomposition, and conflict handling remain difficult. The code, datasets, and demos can be found on the project website: https://libero-perm.github.io/.",
    "published": "2026-10-15T17:59:59Z",
    "updated": "2026-10-15T17:59:59Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.22372"
  },
  {
    "id": "2610.22371",
    "title": "Gen4P: Video Generators are 4D Perceivers",
    "authors": [
      "Yitong Xia",
      "Zeren Jiang",
      "Chuanxia Zheng"
    ],
    "abstract": "We introduce Gen4P, a unified framework for recovering 4D geometry and motion from monocular video. We show that a pretrained video generator can be repurposed into a feed-forward 4D perceiver without iterative denoising. Building on on-demand querying, Gen4P processes clean video latents in a single encoder pass and predicts the requested 4D attributes through a lightweight cross-attention decoder. The on-demand query formulation enables flexible spatial sampling, and our proposed continuous-time queries further provide temporal flexibility. To strengthen geometric knowledge, we propose a straightforward plug-in solution by incorporating a pretrained video-depth LoRA as a frozen geometry prior, improving overall performance without adding extra trainable parameters. Gen4P achieves state-of-the-art or competitive performance on tasks of 3D point tracking, video depth and camera pose estimation. Qualitative results on in-the-wild videos illustrate its capability of tracking complex motion while maintaining the delicate structure. Together, these results demonstrate the potential of video generative pretraining for unified 4D perception. See https://gen4p.github.io for more visual results.",
    "published": "2026-10-15T17:59:48Z",
    "updated": "2026-10-15T17:59:48Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22371"
  },
  {
    "id": "2610.22370",
    "title": "Which Tokens to Merge? Diffusion Dynamics for Efficient Image Generation",
    "authors": [
      "SeungJu Cha",
      "Ye-Chan Kim",
      "HyunGee Kim",
      "Sungho Koh",
      "Dong-Jin Kim"
    ],
    "abstract": "Token merging has emerged as an effective training-free strategy for accelerating diffusion models by reducing redundant token computation while minimizing generation degradation. A key challenge is determining which tokens can be safely merged and which should be preserved for subsequent computation. Existing method addresses this by preserving prompt-aligned foreground regions, thereby protecting semantically relevant structures. However, this text-relevance criterion overlooks background objects, local details that are not explicitly mentioned in the prompt, leading to degraded structural coherence. In this work, we propose Dynamics-aware Token Merging (DaTMe), a training-free framework that grounds token merging in the underlying diffusion dynamics. Our key insight is that token importance should reflect whether a token remains unresolved during denoising and whether it carries structural information. To this end, DaTMe constructs a dynamics- aware importance map from the Tweedie denoised estimate. The map combines a temporal signal, measuring inter-step changes in the predicted clean image, with a structural signal, capturing local high-frequency content such as boundaries and fine details. Using this map, DaTMe adaptively assigns tokens into merging roles under a given compression ratio: important tokens are preserved as anchors, while tokens that are both temporally stabilized and structurally homogeneous are selected as safe merge candidates. Experiments on PixArt-a and FLUX demonstrate that DaTMe maintains visual fidelity across the entire image, highlighting diffusion dynamics as an effective token-level merging decision in efficient generation. Our code is available at https://github.com/SeungJuCha/DaTMe.",
    "published": "2026-10-15T17:59:35Z",
    "updated": "2026-10-15T17:59:35Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22370"
  },
  {
    "id": "2610.22369",
    "title": "SoftCache: Adaptive Step Size Caching for Diffusion Transformers",
    "authors": [
      "Shimon Malnick",
      "Nadav Orenstein",
      "Ohad Fried",
      "Shai Avidan"
    ],
    "abstract": "Diffusion and flow models generate a sample over iterative steps, each a full pass through a large network, and that pass dominates generation cost. Training-free caching accelerates them by reusing activations from recent evaluations instead of recomputing them. Dynamic caching methods decide when to refresh by accumulating a cheap probe of the network input into a staleness signal and spending a fresh evaluation once it crosses a threshold. They perform hard caching: the signal is a binary switch between refresh and reuse, and every step, fresh or cached, advances by the prescribed step size. We observe that the signal carries much more than this switch. How far it sits below the threshold, its headroom, predicts the error induced by reuse. We propose SoftCache, which performs soft caching: instead of a binary switch, the headroom sets how far each cached step goes. Where the headroom is large, the sampler jumps past several scheduled nodes, and as a refresh nears, its steps shrink back toward the original step. These adaptive jumps may land between the scheduled nodes, taking the sampler off its fixed grid. SoftCache requires no training and adds no per-backbone settings: on FLUX for images and on HunyuanVideo and Wan2.1 for video, at speedups from $3.5\\times$ to $6.9\\times$, it is ahead of every baseline on all four fidelity metrics.",
    "published": "2026-10-15T17:59:34Z",
    "updated": "2026-10-15T17:59:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22369"
  },
  {
    "id": "2610.22367",
    "title": "Discovering state-of-the-art quantum circuits with large language models",
    "authors": [
      "Andi Gu",
      "Alek H. Kemeny",
      "Susanne F. Yelin",
      "Mikhail D. Lukin"
    ],
    "abstract": "Significant efforts are currently being directed toward the implementation of large-scale quantum information processors, but realizing useful quantum advantage also requires the development of efficient quantum algorithms. While for many practical problems the dominant resource costs are associated with a small set of computational primitives, optimizing them in the quantum setting presents unique challenges, including a reversibility constraint absent from ordinary classical computation. Here we introduce an evolutionary framework in which large language models (LLMs) propose circuit designs and an independent evaluator verifies and scores them. We apply this framework to tasks spanning numerical computation, chemistry, optimization, quantum simulation, and number theory. In seven of the eight tasks, the discovered circuits significantly reduce both Toffoli and qubit counts relative to the state of the art. In the eighth, the search discovers a new reversible architecture for prime-field modular inversion. By handling reversibility differently, the architecture makes divsteps -- a classical algorithm previously impractical for reversible integer arithmetic -- viable and substantially improves the Toffoli-qubit trade-off for modular inversion. These results open the door for evaluator-guided LLM co-design of new algorithmic structures for quantum computation.",
    "published": "2026-10-15T17:59:20Z",
    "updated": "2026-10-15T17:59:20Z",
    "categories": [
      "quant-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22367"
  },
  {
    "id": "2610.22364",
    "title": "T2-z: Test-Time Optimization of Environment Latents for Robotic World Models",
    "authors": [
      "Chenyuan Zhou",
      "Yining Hong",
      "Huang Huang",
      "Yunfan Jiang",
      "Wenlong Huang",
      "David Held",
      "Vitor Campagnolo Guizilini",
      "Yue Wang",
      "Li Fei-Fei",
      "Jiajun Wu",
      "Leonidas Guibas",
      "Yejin Choi"
    ],
    "abstract": "Predicting how the world responds to an action requires more than what can be seen: robots must account for environmental factors that are neither directly observable nor explicitly specified, from physical properties such as friction and mass to human-defined environmental rules. We introduce T2-Z for test-time optimization of environment latents, which augments a robotic world model with a learnable environment latent to condition world predictions. This compact latent captures underlying environmental variation without supervision of what environmental factors exist or what values they take. During training, T2-Z alternates between two stages: a world-model optimization stage that fixes the latents and learns general action-conditioned dynamics across environments; and an environment-latent optimization stage that freezes the world model and optimizes the conditioning latents, allowing latent structure to emerge purely through world prediction. At test time, the world model remains frozen and a newly initialized environment latent is optimized from one or more test-time interactions, adapting the model to previously unseen environmental configurations. Across 7 simulated settings and 4 real-world robotic tasks, T2-Z reduces object prediction error metric from 15.20 to 7.00 and raises action success from 33.73% to 72.96%. Its emergent latents capture structured representations of individual and compounded factors across diverse visual scenes. Ablations further show that T2-Z can efficiently infer environment latents from as little as a single test-time interaction trajectory.",
    "published": "2026-10-15T17:59:11Z",
    "updated": "2026-10-15T17:59:11Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22364"
  },
  {
    "id": "2610.22363",
    "title": "Perceive, Predict, and Plan: a Unified World Action Model for Egocentric Dexterous Manipulation",
    "authors": [
      "Zirui Wu",
      "Chen Guo",
      "Tianjian Jiang",
      "Zeren Jiang",
      "Zeming Li",
      "Lingchen Yang",
      "Longteng Duan",
      "Ying Xue",
      "Handi Yin",
      "Shenyuan Gao",
      "Martin R. Oswald",
      "Jun Zhang",
      "Ping Tan",
      "Jie Song"
    ],
    "abstract": "We introduce P$^{3}$-WAM, a unified world action model for egocentric dexterous manipulation that learns 3D perception, action-conditioned prediction, and goal-directed planning through three complementary modes: Perceive, which reconstructs articulated hand motion and camera trajectories from video; Predict, which generates visual futures under prescribed actions; and Plan, which jointly generates action trajectories and their anticipated visual consequences conditioned on an initial image, a language instruction, and an optional visual goal. Our model integrates a compact, structured 3D action representation into a pretrained video diffusion transformer through a mixture-of-transformers architecture with shared base weights, modality-specific adaptation, and bidirectional visual-action attention. Randomized modality visibility lets video and 3D actions serve as either conditioning context or prediction targets across the three modes. Experiments show that unified training improves all three capabilities over single-mode training, including gains in planning quality under a vision-language model evaluation. Through unified training, our model outperforms specialized baselines on 3D hand reconstruction and action-conditioned video prediction across four datasets, while producing goal-directed manipulation videos with stronger instruction adherence and action progression than video-generation baselines. Project Page: https://p3-wam.pages.dev/",
    "published": "2026-10-15T17:59:07Z",
    "updated": "2026-10-15T17:59:07Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.22363"
  },
  {
    "id": "2610.22362",
    "title": "CoDA: Co-Evolution of Data Engines and Action Policies",
    "authors": [
      "Tianjiao Yu",
      "Zhilin Ou",
      "Yifan Shen",
      "Xinzhuo Li",
      "Yuanzhe Liu",
      "Onkar Kishor Susladkar",
      "Fan Wang",
      "Ismini Lourentzou"
    ],
    "abstract": "Generative simulation can automate robot environment construction, but physically valid environments are not necessarily useful for training. The challenge is to identify environments that address a policy's failures and supervision that helps it overcome them. We introduce CoDA, a framework in which a simulation data engine and an action policy co-evolve through a shared heterogeneous memory of environment construction, policy failures, and learning progress. The memory compiles validated diagnoses from a vision-language critic into generation programs that recreate difficulties and training programs that help the policy overcome them. We further propose Text2potential to convert these diagnoses into staged potentials for action-chunk value learning, providing dense supervision for policy updates while preserving the task's optimal policy under standard shaping assumptions. Measured learning progress guides further generation and program refinement. Across four manipulation task families, CoDA improves out-of-distribution success from 5.3% after supervised fine-tuning to 27.6%, exceeding the strongest closed-loop baseline by 9.5 percentage points with the same generation budget. On LIBERO-Pro, 15 rounds of generation and training raise success from 25% to 84% under position perturbations and from 1% to 76% under instruction perturbations.",
    "published": "2026-10-15T17:59:02Z",
    "updated": "2026-10-15T17:59:02Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.22362"
  },
  {
    "id": "2610.22360",
    "title": "Grounding Generative Verification in 3D Content",
    "authors": [
      "Shuanglin Li",
      "Jiaying Lin",
      "Shuquan Ye"
    ],
    "abstract": "Recent advances in multimodal large language models (MLLMs) and 3D generation have expanded 3D understanding and synthesis. However, beyond visual fidelity, task-specific correctness grounded in 3D evidence remains a major challenge. We argue that building reliable 3D systems requires not only stronger generation and reasoning, but also verification feedback that identifies unmet requirements and explains their violations, allowing systems to reflect on and refine their outputs. Such feedback must integrate multi-view observations and distinguish genuine inconsistencies from projection-dependent appearances. We make three contributions. First, we introduce 3DVerifierBench, a benchmark spanning 10 tasks that evaluates decisions, rejection explanations, and responses to controlled changes in specifications and candidates. A human study reveals a 21.6 percentage-point gap between humans and the strongest tested model, GPT-6 Astra, while explanation-aware analysis exposes weaknesses in rejection reliability. Second, we analyze verification across fine-grained factual categories, exposing errors in values and target binding. We develop a scalable pipeline combining multi-view fact extraction, controlled 3D editing, and native annotations to produce 14,126 training examples with contradiction explanations and linked counterfactuals. Third, we examine how verification could support 3D generation through candidate selection and recursive refinement. In human-labeled sixteen-candidate pools, oracle selection improves complete factual success from 26.7% to 90.0%. In a separate eight-input study, human-guided recursive refinement satisfies all seven requirements for every input, compared with three under parallel Oracle@8. Together, our benchmark, analysis, and data pipeline establish a foundation for models to reflect on 3D content through reliable verification feedback.",
    "published": "2026-10-15T17:59:01Z",
    "updated": "2026-10-15T17:59:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.22360"
  },
  {
    "id": "2610.21195",
    "title": "Condition-Contrastive Extrapolation for On-Policy Distillation of Language Models",
    "authors": [
      "Wenxuan Luo",
      "Chenxi Li",
      "Haoyue Liu",
      "Yongxin Guo",
      "Xiaoying Tang"
    ],
    "abstract": "On-policy distillation (OPD) improves a student language model by training on its own generated trajectories with supervision from a stronger teacher. However, when conditioned on student-generated prefixes, the teacher can favor invalid continuations that violate the question's premises, causing OPD to encourage erroneous reasoning steps. As a remedy, we introduce Condition-Contrastive Extrapolated On-Policy Distillation (CCE-OPD), which makes teacher supervision sensitive to question conditions. CCE-OPD incorporates (1) a fixed-prefix comparison in which the same frozen teacher evaluates the complete question and a counterpart with a selected condition masked, and (2) a bounded log-probability contrast that reweights the teacher distribution into an auxiliary distillation target. On 200 diagnostic reasoning states, condition contrast reduces the rate of preferring invalid continuations from 27.0% to 16.0%. Extensive experiments across six mathematical benchmarks show that CCE-OPD improves avg@8 over OPD by an average of 1.60 and 1.95 percentage points when distilling Qwen3-8B into 0.6B and 1.7B students, respectively. It also achieves the strongest results on four transfer benchmarks.",
    "published": "2026-10-15T03:55:34Z",
    "updated": "2026-10-15T03:55:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21195"
  },
  {
    "id": "2610.21194",
    "title": "FedSumUp: User-Auditable Privacy-Aware Representation Sharing for Resource-Constrained Federated Intelligence",
    "authors": [
      "Jingwei Zhao",
      "Tiantong Sun",
      "Yuanyuan Song",
      "Jinhuan Guo",
      "Wei Zishuo",
      "Shengyu Huang",
      "Ziyuan Ren",
      "Wei Chen",
      "Xiaojin Zhang"
    ],
    "abstract": "Existing federated data condensation methods face privacy risks, as uploaded synthetic data may preserve sensitive information and remain vulnerable to reconstruction attacks. Moreover, their generation often incurs considerable client-side computational overhead, limiting deployment on resource-constrained devices. To address these issues, we propose FedSumUp, which employs a learnable lossy compressor on clients to generate compact and visually interpretable representations. By controlling information capacity, FedSumUp reduces privacy leakage while allowing users to directly assess the privacy-utility tradeoff. We further introduce a dual-objective optimization mechanism to preserve task-relevant semantics while suppressing reconstruction risks. The compressor is trained on the server and only performs lightweight inference on clients. Since the server cannot access raw data, we develop a data-free closed-loop optimization strategy that optimizes the compressor by minimizing the discrepancy between original and twice-compressed representations after structure-preserving upsampling. Experiments on BloodMNIST, CIFAR-10, and ChestMNIST demonstrate reconstruction PSNR as low as 8.56 dB (with synthetic PSNR as low as 5.45 dB), client runtime reductions up to 96.5% (from 778s to 27s on ChestMNIST), and competitive classification accuracy (89.72% ChestMNIST, 82.24% BloodMNIST, 65.63% CIFAR-10), while remaining inherently robust to non-IID data distributions.",
    "published": "2026-10-15T03:54:17Z",
    "updated": "2026-10-15T03:54:17Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21194"
  },
  {
    "id": "2610.21190",
    "title": "ControlFlow3D: Distilling Multi-View Knowledge into Latent Flow Matching for Point Cloud Upsampling",
    "authors": [
      "Yuang Liu",
      "Zhi Zuo",
      "Zhengkai Zhao",
      "Lirui Zhang",
      "Pan Gao",
      "Hao Feng",
      "Zhengzhe Liu"
    ],
    "abstract": "Point cloud upsampling is essential for 3D applications but remains challenging due to sparse, under-constrained observations. Multi-view images can resolve geometric ambiguity, but existing multi-modal methods do not fully exploit visual cues. We propose ControlFlow3D, a framework that distills knowledge from pretrained foundation models into a lightweight generation network during training, enabling strong performance without multi-view images available at test time. Specifically, our method performs conditional flow matching in a structured latent space defined by a frozen 3D encoder. Multi-view image tokens and 3D latent tokens are jointly clustered into shared prototypes via unsupervised soft KMeans; the resulting prototypes guide the flow trajectory through velocity control and are aligned by a consistency loss that progressively transfers image knowledge into the base network. A Mamba-based geometry decoder then maps latent features to dense coordinates with linear complexity. We also construct ShapeNetPU, a 35K-object multi-modal benchmark that is 31 times larger than prior datasets. Extensive experiments across multiple benchmarks demonstrate the effectiveness of our method and its strong generalization capability.",
    "published": "2026-10-15T03:50:42Z",
    "updated": "2026-10-15T03:50:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21190"
  },
  {
    "id": "2610.21185",
    "title": "Mine, Sample, Render: Test-Time Diversity Alignment Of Generative Models",
    "authors": [
      "Kostas Triaridis",
      "Morris E. Sharp",
      "Nebojsa Jojic"
    ],
    "abstract": "Modern generative models produce high-quality individual outputs but struggle to sample diversely, even when explicitly instructed to do so. We introduce MINE-SAMPLE-RENDER (MSR), a test-time approach that externalizes the diversity into an explicit, corpus-derived sampling procedure. Our pipeline (i) mines an interpretable categorical schema from a corpus of real artifacts and supplies statistics for sampling; (ii) samples attribute configurations from the corpus-derived statistics; (iii) uses a generative model purely as a conditional renderer of a sampled configuration. Across weather report generation, user simulation, webpage design, text-to-image generation, and agent-generated 3D assets, we evaluate the diversity and output quality of MSR-guided generation and show that MSR improves alignment with corpus distributions and diversity of generated outputs.",
    "published": "2026-10-15T03:40:07Z",
    "updated": "2026-10-15T03:40:07Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21185"
  },
  {
    "id": "2610.21183",
    "title": "Monotone Piecewise-Linear Harmonization of Multitemporal Multispectral Surface Reflectance With Unsupervised Deep Multiview Pseudoinvariant Features Learning",
    "authors": [
      "Lino Garda Denaro",
      "Chia-Hsiang Lin"
    ],
    "abstract": "Surface reflectance products derived from optical satellite may exhibit systematic inconsistencies across acquisition dates, because atmospheric correction is generally performed independently for each image. Such residual biases distort the temporal behavior of invariant ground targets and reduce the reliability of multitemporal surface reflectance analysis. This study proposes Deep Multitemporal Generalized Canonical Correlation Analysis (DeepMGCCA), an unsupervised deep multiview pseudoinvariant feature learning framework that integrates Deep Generalized Canonical Correlation Analysis (GCCA) with Multivariate Alteration Detection (MAD) to identify deep-pseudoinvariant features (DIFs) for the removal of surface reflectance biases across multitemporal satellite observations. Unlike conventional MAD-based approaches that rely on linear GCCA, the proposed framework replaces date-specific linear projections with a shared convolutional encoder. The framework learns deep invariant features (DIFs) directly from pixel-weighted canonical variates via iterative reweighting strategy, while a reconstruction regularizer preserves surface reflectance information and prevents degenerate collapse from suppressing genuine temporal variability. Experiments were conducted on four annual Landsat-8/9 and Sentinel-2 acquisitions across four regions of interest (ROIs) to evaluate four DIF-based harmonization transforms. A monotone piecewise-linear transform derived from DIFs quantiles consistently achieved the largest bias reduction, lowering the between-date spectral angle by up to 2.54 and RMSE by 0.015, and raising PSNR by up to 4.04~dB. These findings demonstrate the potential of deep invariant feature learning for multitemporal surface reflectance bias removal while highlighting the importance of preserving physically meaningful temporal and spectral information during nonlinear representation learning.",
    "published": "2026-10-15T03:37:51Z",
    "updated": "2026-10-15T03:37:51Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21183"
  },
  {
    "id": "2610.21182",
    "title": "Does Latent Chain-of-Thought Actually Reason? A Single, Unifying Taxonomy for Latent Reasoning",
    "authors": [
      "Jingjie Qiu",
      "Sheldon Yu",
      "Xunyi Jiang",
      "Jiajin Liu",
      "Zihan Huang",
      "Zhendong Chu",
      "Tong Yu",
      "Julian McAuley",
      "Junda Wu"
    ],
    "abstract": "Latent chain-of-thought replaces written reasoning steps with continuous hidden states, giving models additional steps to compute before answering. It remains unclear what computation these steps actually perform. High task accuracy and decodable intermediate answers do not establish that a model uses its latent chain to reach an answer. We study this question across twenty-one model-task configurations covering three training recipes, three reasoning tasks, and two backbones. We combine chain deletion and content replacement with probes and trajectory analysis to test whether the chain affects the answer, what it encodes, and how its states change. On logical tasks, COCONUT often carries an answer that is already readable before the chain begins. Its states settle early, and deleting the chain leaves predictions almost unchanged. Per-step supervision produces an ordered layout of reasoning steps and can make the model depend on the chain. Yet even an ordered chain can act as a placeholder, with deletion hurting performance while content replacement leaves answers unchanged. On arithmetic tasks, all tested recipes show dependence on chain content. These results show why readable latent states alone are insufficient evidence of reasoning. We introduce a taxonomy that separates what a chain represents from how the model uses it. Seen this way, earlier reports no longer compete: placeholder tokens, collapsed superposition and step-dependent causal roles are each consistent with a different kind of chain, each obtained on a different task, training recipe or measurement. Once a study says which property it tested, whether the model uses the chain, what the chain holds, or how its state moves, claims about latent reasoning can be compared.",
    "published": "2026-10-15T03:37:32Z",
    "updated": "2026-10-15T03:37:32Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21182"
  },
  {
    "id": "2610.21179",
    "title": "Judging the Judges: Confidence and Disagreement in Rubrics as Rewards",
    "authors": [
      "Michael Tian-Yue Liu",
      "Anne Harrington",
      "Trevor Darrell",
      "Yutong Bai"
    ],
    "abstract": "Rubrics as Rewards (RaR) extends reinforcement learning to non-verifiable domains by using an LLM judge to score responses against a structured rubric. Prior work has focused on improving the rubric or strengthening the single judge, with comparatively little attention to how different single or multiple judges might be used during RaR training. We first show that judge identity alone produces a substantial spread in scores when training Qwen3-4B-Base on RaR-Medicine and RaR-Science across five frontier and open-weight judges. Building on this, we propose RaRE (Rubrics as Rewards with Ensembles), a novel judge ensemble strategy for RaR with two mechanisms: a soft-Likert reward that uses judge logprobs to weight more confident judges more heavily, and a drop-on-disagreement mask that excludes high-disagreement rollouts from the GRPO update. We find that this design is critical: while a naive average of judge scores fails to outperform the best single judge, RaRE outperforms every single-judge RaR variant on both HealthBench and GPQA Diamond, with per-theme analysis showing that it inherits the complementary strengths of its constituent judges. Our findings establish judge ensembling as a compelling axis for improving RaR.",
    "published": "2026-10-15T03:35:00Z",
    "updated": "2026-10-15T03:35:00Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.21179"
  },
  {
    "id": "2610.21177",
    "title": "AgentEval: Evidence-Bounded Assessment of Stateful Agents",
    "authors": [
      "Ruiqi Gao"
    ],
    "abstract": "Task completion alone does not determine whether a stateful agent satisfied its obligations, and a recorded judgment does not guarantee that its supporting evidence remains valid. We present AgentEval, a system that carries a contract-bound assessment record through tool execution, state and event capture, report qualification, and case maintenance. It separates what the agent did, what the evidence establishes, and whether the conclusion is supported for present use. On 32 tool-world administrations, independent checks agree on all 30 complete episodes, distinguishing satisfied, violated, and unresolved obligations; two interrupted administrations are retained. Controlled interventions on 48 evidence views expose 36 binding faults missed by hash-only checks without changing agent behavior. Scenario Studio connects reviewed cases to 12 two-turn reports with 24 independently checked answers. A separate public-benchmark study on 192 held-out executions reveals ten completed return subgoals within broader task failures and isolates the effect of missing evidence. These studies show how an executable assessment record makes scope, evidential support, and report reuse inspectable across an agent evaluation workflow.",
    "published": "2026-10-15T03:32:39Z",
    "updated": "2026-10-15T03:32:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21177"
  },
  {
    "id": "2610.21176",
    "title": "Language Models Share a Readout Bottleneck in Working Memory",
    "authors": [
      "Dongyu Gong"
    ],
    "abstract": "Large language models (LLMs) reproduce a human working-memory signature on the N-back task: performance declines as memory load N increases, and errors concentrate on lures, items that repeat the current stimulus at a neighboring but incorrect serial position. We ask whether this shared behavioral signature reflects a shared mechanism. The literature offers two candidate accounts. On a precision account, softmax attention cannot concentrate its weight on the item N positions back, so adjacent items are retrieved instead. On an interference account, attention selects the correct item, but the content of competing items corrupts the decision. We dissociate these accounts in 15 pretrained LLMs from three families (70 million to 14 billion parameters) and in minimal transformers trained from scratch. In all three families, the attention heads that carry the task attend to the target on most missed matches. Linear probes decode near-perfectly whether a matching letter occurred at the target or at a lure position, even on trials where the model false-alarms to the lure, although its own decisions barely distinguish the two. Sharpening attention yields negligible gains, whereas suppressing the letter identity of non-target items improves sensitivity (d') in nearly all model-by-load conditions. In larger models the task is spread over more heads, and removing interference helps more. In minimal transformers, precision limits a single attention layer, but a second layer removes this constraint. The working-memory limit of LLMs therefore lies in reading items out under interference rather than in locating them, consistent with interference accounts of human working memory.",
    "published": "2026-10-15T03:32:37Z",
    "updated": "2026-10-15T03:32:37Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2610.21176"
  },
  {
    "id": "2610.21170",
    "title": "MemScope: Evolving Agent Memory Architectures through Localized Code Repair",
    "authors": [
      "Miao Su",
      "Yucan Guo",
      "Zixuan Li",
      "Long Bai",
      "Zhongni Hou",
      "Xiaolong Jin",
      "Jiafeng Guo"
    ],
    "abstract": "Agent memory architectures define how LLM agents store and reuse experience across tasks, but they are typically fixed after deployment, limiting their adaptability across task types. Recent self-evolving approaches instead adapt these memory architectures using execution feedback, typically represented as evaluation scores or compressed summaries. However, such coarse-grained feedback is insufficient for precise failure localization in current agent systems, where long-horizon task execution involves multiple interacting components. Without a precise failure location, existing approaches lack a clear code-level target for modification, leaving the update scope weakly constrained and often leading to large-scale rewrites of an otherwise capable memory architecture. We propose MemScope, a framework for evidence-grounded, localized evolution of an existing memory architecture. Its tool-using Patch Agent jointly inspects raw execution traces, runtime memory state, and current architecture code to identify repair targets and apply bounded, in-place edits under provider-identity and memory-compatibility constraints. On GAIA, the trace-and-memory inspection variant achieves 86.67% accuracy, compared with 70.00% for trace-only and 63.33% for summary-only feedback. Under xBench tasks, the evolved memory architecture improves over its original version from 49 to 55 correct answers with DeepSeek V3.2 and from 50 to 53 with Kimi K2.7 Code. On disjoint ALFWorld unseen tasks, success rises from 50.75% to 71.64%. Across archived architecture-snapshot transitions, the median code-change ratio is 4.4%. These results support fine-grained execution evidence as a basis for localized, in-place memory-architecture evolution.",
    "published": "2026-10-15T03:27:34Z",
    "updated": "2026-10-15T03:27:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21170"
  },
  {
    "id": "2610.21167",
    "title": "GRADS: Graph-Regulated Agentic Data Synthesis with Controllable Difficulty",
    "authors": [
      "Gaocheng Yang",
      "Ruijie Tao",
      "Kai Ye",
      "Senhua Zhang",
      "Zhengqin Zhu",
      "Ziyang Li"
    ],
    "abstract": "Deep research agents are increasingly deployed to retrieve precise information from large corpora, yet multi-hop, long-horizon tasks remain challenging. Synthetic data generation has emerged as a scalable solution, with existing pipelines typically expanding seed tasks to increase their apparent depth and breadth. However, this expansion does not reliably translate into necessary reasoning: newly introduced evidence may be only weakly coupled to the answer, creating a mismatch between intended and empirical difficulty. To address this problem, we introduce GRADS, a graph-guided agentic data synthesis framework with explicit difficulty control. GRADS runs a closed loop of seed selection, evidence expansion, question--answer construction, and verification while maintaining a graph of the evidence and inference dependencies required to derive each answer. At each step, it conditions generation on a relevant subgraph, preserving indispensable inference without accumulating irrelevant context. Experiments across security, software-engineering, and scientific-document domains show that GRADS consistently generates verified tasks with empirically separated difficulty distributions, as measured by independent solvers. Moreover, under matched training budgets, post-training on this data delivers consistent gains at every level: SFT raises the solution-termination rate to over 95% while cutting tool calls and turns by up to 75%, RL trims tool use by up to a further 19.5%, and on our held-out, domain-specific benchmarks, the resulting 4B model matches Sonnet~4 on software engineering and surpasses it on the scientific and security domains.",
    "published": "2026-10-15T03:24:42Z",
    "updated": "2026-10-15T03:24:42Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21167"
  },
  {
    "id": "2610.21159",
    "title": "VisualTrust: Video Reasoning under On-Screen Claim Framing",
    "authors": [
      "Huachao Zhu",
      "Junjielong Xu",
      "Sicheng Li",
      "Liang Yang",
      "Mingtao Chen",
      "Zhichao Hu",
      "Li Jiang",
      "Pinjia He"
    ],
    "abstract": "On-screen text can describe what a video shows, or it can frame what the video is supposed to mean. Current benchmarks treat both alike, testing whether a model can read the text rather than whether it should trust it. We study claim deference, multimodal large language models' tendency to let an on-screen claim override conflicting visual evidence. We introduce VisualTrust, a counterfactual benchmark with 5,063 cases across 14 claim-fact classes. Each case pairs a question with three versions of the same video: one with no claim, one with an accurate claim, and one with a misleading claim that alters a single grounded fact. The option the misleading claim supports is the trap answer. Across seven open-weight and four proprietary models, mean accuracy falls from 90.1% without a claim to 51.9% with a misleading claim. Among initially correct responses, 42.8% flip to the trap answer and only 0.6% become other errors. Strong no-claim accuracy does not ensure resistance. We also introduce DEAR (Decoupled Evidence Arbitration and Reading), a training-free agent for video question answering that separates evidence arbitration from reading. An independent check reports conflicting evidence, a selector weighs it without a fixed modality priority and blinds what it withholds, and the reader answers from the resulting video in a fresh context. On 500 videos across three proprietary models, DEAR raises accuracy under misleading claims from 47.2--64.0% to 81.8--85.2% and reduces trap-answer selection from 34.4--50.8% to 11.6--15.0%, while preserving no-claim accuracy.",
    "published": "2026-10-15T03:20:18Z",
    "updated": "2026-10-15T03:20:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21159"
  },
  {
    "id": "2610.19785",
    "title": "FPV-CRASH: A Dataset for Offline Crash Moment Localization in Drone First-Person-View Videos",
    "authors": [
      "Jifan Zhang",
      "Tingyu Wang",
      "Qian Liu",
      "Zhedong Zheng"
    ],
    "abstract": "Crash Moment Localization aims to localize the major physical impact that interrupts controlled flight in an onboard first-person-view (FPV) video recorded by a drone, thereby providing a temporal reference for retrospective crash analysis in aerial robotics. However, existing crash-video datasets predominantly target surveillance or dash-camera footage, and their annotation schemes and task formulations are not designed for temporal localization of the major physical impact in UAV onboard FPV videos. To address this gap, we present FPV-CRASH, a dataset and fixed-protocol reference evaluation for offline Crash Moment Localization in drone FPV videos. FPV-CRASH contains 1,052 drone FPV clips (526 Crash and 526 Normal); each Crash clip has a single-frame reference annotation for the Crash Moment, and every clip is paired with four English captions automatically generated from sampled frames and the known Crash/Normal label. Normal clips carry no timestamp target and provide training-time background supervision. The captions support an auxiliary Text-to-Video Retrieval task, whereas localization inference remains video-only. We further provide a heatmap-based reference model that estimates a continuous Crash Moment timestamp from sparsely sampled frames. Under the fixed, non-source-disjoint clip-level protocol, the reference model reduces MAE from 1.12 s for the strongest fixed timing-prior baseline to 0.56 s (a 50% relative reduction) and achieves a median absolute error (MedAE) of 0.33 s; the fraction of clips localized within 0.5 s rises from 37.14% to 65.71%. The release includes annotations, available source video identifiers and URLs, clipping metadata, fixed split lists, and preprocessing code so that the reportable portion can be reconstructed without redistributing source footage. At submission time, all source-compilation URLs remained accessible.",
    "published": "2026-10-14T08:32:57Z",
    "updated": "2026-10-14T08:32:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.19785"
  },
  {
    "id": "2610.19780",
    "title": "LabOPBench: A Multimodal Benchmark for Evidence-Grounded Laboratory Decision Making",
    "authors": [
      "Jingyuan Li",
      "Yujie Liu",
      "Yijie Dai",
      "Xiaoyu Yuan",
      "Nian Ran",
      "Huajie Niu",
      "Ming Zhu",
      "Shuwen Zhao",
      "Chenxi Li",
      "Fenghao Lu",
      "Jiahao Li",
      "Xinyu Gu",
      "Zhe Liu",
      "Long Xu",
      "Wenlong Zhang",
      "Bo Zhang",
      "Lei Bai",
      "Peiyu Zhang",
      "Minting Pan",
      "Weinan Zhang",
      "Dongzhan Zhou"
    ],
    "abstract": "Laboratory experiments involve more than following predefined protocols; they require adaptive decision-making as the experimental state changes. Existing scientific benchmarks rarely assess such evidence-based decisions in laboratory settings. Here we present LabOPBench, a multimodal benchmark of 756 expert-authored, independently reviewed questions in organic synthesis and materials science. Each item pairs laboratory evidence with procedural context and an open-ended judgment, evaluated using a question-specific scoring rubric. Eight multimodal models obtain overall normalized scores of 28.8-45.8%, leaving substantial room for improvement. On a controlled 100-question subset, the strongest models outperform undergraduate participants on average but remain below the average performance of PhD participants. Expert analysis of responses from the three leading models identifies Evidence Misreading and Evidence-Decision Conflict as the dominant error patterns. These results reveal that current models still struggle to turn multimodal perception into reliable laboratory decision-making.",
    "published": "2026-10-14T08:29:52Z",
    "updated": "2026-10-14T08:29:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19780"
  },
  {
    "id": "2610.19778",
    "title": "Computational compressive imaging reconstruction with a simulated-annealing-based Ising solver",
    "authors": [
      "Ze Zheng",
      "Xiaoyan Wu",
      "Hang Xu",
      "Jingzheng Huang",
      "Tailong Xiao",
      "Guihua Zeng"
    ],
    "abstract": "Computational compressive imaging, such as single-pixel imaging and lensless imaging, is a promising imaging technique, enabling the reconstruction of objects from under-sampled measurements through compressed sensing algorithms or deep learning methods. However, the demand for electronic computational resources grows rapidly when recovering high-resolution and multi-dimensional images and training neural networks with numerous parameters, which has become a bottleneck for the widespread adoption of this technique. Here, we propose a physics-driven reconstruction framework that formulates imaging inverse problems as Ising models and directly recovers target objects through the self-evolution of non-von Neumann Ising machines toward the ground state of the Hamiltonian. We employ a simulated-annealing-based Ising solver to demonstrate this proof-of-concept by reconstructing objects in both single-pixel imaging and a lensless diffuser camera at sampling rates ranging from 1% to 25%. By further incorporating a foreground-sparsity constraint and a smoothness constraint, the reconstruction quality of our method is comparable to or even better than that of mainstream algorithms. This approach has the potential to substantially reduce the electronic computational burden of inverse reconstruction, paving the way for real-time, low-power computational imaging.",
    "published": "2026-10-14T08:28:33Z",
    "updated": "2026-10-14T08:28:33Z",
    "categories": [
      "physics.optics",
      "cs.CV",
      "cs.DC",
      "math-ph",
      "physics.app-ph"
    ],
    "url": "https://arxiv.org/abs/2610.19778"
  },
  {
    "id": "2610.19777",
    "title": "Q-MAGIC: Quad-only Mesh Autoregressive Generation via Singularity-Aware Circular Relative Offset Tokenization",
    "authors": [
      "Yuming Zhao",
      "Zezeng Li",
      "Weimin Wang",
      "Xiang Wu",
      "Na Lei"
    ],
    "abstract": "Autoregressive models have proven effective for triangular mesh generation by transforming it into predicting the next face, converting the non-differentiable connectivity prediction into a sequence of token predictions. However, generating quad-only meshes remains challenging because quad faces impose stricter topological constraints than triangles. The model must not only serialize quad faces into a valid token sequence, but also support unambiguous connectivity reconstruction during de-serialization. To address this, we propose Q-MAGIC, a novel autoregressive model for quad mesh generation. We first introduce a tailored serialization scheme for quad meshes, which requires at least two new vertices for the next face and is less flexible than triangles due to strict wiring constraints. To meet these requirements and reduce serialization length, we propose a singularity-aware serialization that prioritizes wiring from singular points, leading to more coherent traversals. Additionally, we propose a circular relative offset tokenization that encodes geometry mainly via local relative offsets. Built upon this representation, an autoregressive Transformer learns the underlying distribution of quad meshes via next-token prediction, enabling effective quad mesh generation. Extensive experiments demonstrate that Q-MAGIC produces more compact sequences while consistently improving geometric fidelity and mesh quality compared to state-of-the-art methods.",
    "published": "2026-10-14T08:28:18Z",
    "updated": "2026-10-14T08:28:18Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.19777"
  },
  {
    "id": "2610.19763",
    "title": "Physics-Shaped, Not Physical: Auditing Physics-Guided Underwater Image Restoration",
    "authors": [
      "Mochamad Rizal Fauzan",
      "Irgi Surya"
    ],
    "abstract": "Physics-guided networks for underwater image restoration predict transmission and backscatter and invert the image-formation model, yet rarely test whether this physics does any work. We audit one representative design, PhysGuide-Net, with four controlled experiments: five-seed ablations on UIEB with zero-shot evaluation on the complete LSUI (4279 pairs) and AUIED3K (3000 pairs) sets; a data-efficiency study with a capacity-matched control that removes the formation model; and a validation of the predicted maps against measured range on Sea-thru. With all 800 training images the physics module gives no zero-shot gain (mean PSNR differences of at most 0.16 dB; all 95% intervals include zero) at 3.4x the FLOPs. With 80 images it helps more (+0.65 dB on UIEB, +1.48 dB on AUIED3K; seed-to-seed s.d. on AUIED3K from 1.3 to 0.5 dB), although not individually significant after correction, and the control does not reproduce this (0.8-1.0 dB lower). Yet the predicted transmission does not behave like a physical quantity: its correlation with range is no stronger than for the range map of a different image (pooled difference +0.02, versus -0.06 for the dark-channel prior), and a Beer-Lambert fit explains 0.4% of its variance. The effect of the module also changes sign with degradation severity between datasets. The benefit thus comes from a physics-shaped inductive bias, not from physics. We further show that single-run ablations can reverse sign and document implementation defects that invalidate loss ablations.",
    "published": "2026-10-14T08:17:56Z",
    "updated": "2026-10-14T08:17:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.19763"
  },
  {
    "id": "2610.19762",
    "title": "PRISMATIC : Prescription Risk Inspection System for Multi-Agent Treatment Interaction in Clinical Decision-Making",
    "authors": [
      "Ziyang Ling",
      "Shuyu Lu",
      "Ziyi Chen"
    ],
    "abstract": "Medical prescribing errors for multimorbid patients, who require complex drug regimens, are a major patient safety concern. These errors often stem from fragmented decision-making across medical specialties, a critical coordination failure that leads to adverse drug events and rehospitalizations. To address this coordination challenge, we introduce PRISMATIC, a multi-agent architecture where specialized agents, each representing a workflow role, collaboratively generate and refine treatment plans. Operating on a blackboard architecture, the system first structures patient information from clinical notes, then iteratively develops safe, rational, and interpretable drug regimens. The agents' collaboration is governed by two novel adaptive coordination mechanisms: (1) Dynamic Self-Updating Weight Adjustment (DSWA), a long-term mechanism that adjusts the influence weights of agents based on historical case outcomes, enabling the system to adapt and trust more reliable specialists over time. (2) Discrepancy Feedback Precise Calibration (DFPC), a short-term mechanism where agents provide iterative feedback to resolve disagreements and eliminate prescription conflicts for the current patient. Experiments on patient records from the MIMIC-IV database show that PRISMATIC significantly reduces drug conflicts, improves prescription coverage, and enhances treatment consistency compared to strong LLM baselines. Our work demonstrates that structuring clinical co-treatment as a multi-agent coordination problem offers a promising path toward safer and more coherent multidisease management.",
    "published": "2026-10-14T08:17:05Z",
    "updated": "2026-10-14T08:17:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19762"
  },
  {
    "id": "2610.19743",
    "title": "Discriminative Score Function: Turning Pretrained Models into Functional Generative Priors",
    "authors": [
      "Junhoo Lee",
      "Hyeonjin Kim",
      "Sangbum Han",
      "Nojun Kwak"
    ],
    "abstract": "Discriminative models are trained with task-specific objectives such as classification, detection, or representation learning, yet their practical utility depends on generalizing beyond the training task to unseen samples from the same domain. This suggests that a discriminative model may retain an implicit trace of the data manifold beyond its task labels. We ask whether this trace can be exposed as a generative signal without task-specific guidance. We introduce the Discriminative Score Function (DSF), which extracts an image-space generative field from the loss-gradient geometry of a pretrained discriminative model. DSF provides a training-free update rule that moves images toward model-consistent visual regions without retraining or task-specific targets. We apply DSF to diverse pretrained discriminative models, including ResNet classifiers, DETR detectors, and DINOv2 ViT encoders. DSF generates unconditional images from noise and supports conditional guidance, editing, inpainting, and explanation through the same field. DSF-generated samples also provide effective zero-shot quantization calibration when real images or labels are unavailable, preserving feature geometry better than data-free calibration baselines. These results show that discriminative training leaves a generative functional signal for synthesis and calibration. Project page: https://junhoo.me/dsf.",
    "published": "2026-10-14T08:04:30Z",
    "updated": "2026-10-14T08:04:30Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.19743"
  },
  {
    "id": "2610.19742",
    "title": "HyperLoop: Hyperspectral-Assisted Loop Closure Detection in 3D-SLAM for Planetary Exploration",
    "authors": [
      "Annie Bhalla",
      "Dennis Rotondi",
      "Riccardo Giubilato",
      "Kai O. Arras",
      "Wolfgang Stuerzl"
    ],
    "abstract": "Autonomous navigation of planetary rovers is challenged by visually repetitive, featureless terrain. SLAM systems based on 3D Gaussian Splatting (3DGS) offer dense mapping but rely on RGB appearance descriptors that degrade under perceptual aliasing - a common failure mode in extraterrestrial environments where physically distinct locations appear visually identical. This paper presents HyperLoop, the first framework integrating hyperspectral imaging (HSI) into the loop closure module of a 3DGS-based SLAM system. Hyperspectral descriptors encode material-level spectral signatures complementing RGB features, providing robustness to illumination changes and visual repetitiveness. Two HSI descriptor families are introduced: Bag-of-Spectral-Words (BoSW), encoding spectral material distributions via TF-IDF weighted histograms, and PCA-K VLAD (PCAK-VLAD), capturing first-order residual statistics of PCA-compressed spectral signatures. Both are evaluated with SIFT-VLAD and NetVLAD RGB descriptors under Strict-AND and Weighted fusion strategies on a custom dataset from the Moon-Mars Outdoor Test Site (MMOTS) at DLR, comprising synchronized RGB-D and hyperspectral sequences across four planetary analog traverses (65.5 m total). A key finding is that the sensor's Red-NIR range (600-860 nm) provides limited discriminability for rock terrain: the best HSI fusion (SIFT-VLAD + BoSW, Strict-AND) achieves 5.04 cm ATE RMSE, within 1.8% of SIFT-VLAD alone (4.95 cm). The gain over NetVLAD (8.81 cm) is attributable to SIFT-VLAD, not HSI fusion. This motivates future adoption of SWIR sensors capturing diagnostic mineral absorption features absent from the 600-860 nm range for planetary SLAM missions.",
    "published": "2026-10-14T08:04:06Z",
    "updated": "2026-10-14T08:04:06Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.19742"
  },
  {
    "id": "2610.19741",
    "title": "Does the Linguistic Register of Thinking Matter? Wenyan as a Compact Reasoning Register for Chinese LLMs",
    "authors": [
      "Minghan Li",
      "Guodong Zhou"
    ],
    "abstract": "Visible reasoning traces of Chinese reasoning-oriented LLMs are typically written in modern vernacular Chinese, which may be verbose under limited decoding budgets. We ask whether the linguistic register of reasoning can be used to improve efficiency. We propose Wenyan Thinking, which emits intermediate reasoning in Classical Chinese (wenyanwen) while retaining a short direct-answer output. Starting from modern-Chinese reasoning traces, we rewrite only the reasoning field into wenyan and fine-tune Qwen3-4B-Thinking-2507 on the rewritten supervision. To distinguish register shift from generic compression, we construct a compact modern-Chinese control using the same source data, teacher family, base model, and SFT recipe. Across budget-sensitive evaluations on MMLU-ProX-Lite-ZH, CEVAL, and AGIEval-CN, Wenyan Thinking substantially reduces reasoning length and missing-answer rates under constrained decoding. Compact rewriting explains much of the efficiency gain, while wenyan consistently outperforms the compact modern-Chinese control on the primary benchmark and remains competitive across the additional benchmarks. These results identify linguistic register as a practical design axis for efficient visible reasoning in Chinese LLMs.",
    "published": "2026-10-14T08:04:05Z",
    "updated": "2026-10-14T08:04:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.19741"
  },
  {
    "id": "2610.19738",
    "title": "ProtModernBERT: Compute-Efficient Protein Language Modeling",
    "authors": [
      "Alberto Martínez",
      "Natalia Flechas Manrique",
      "Llorenç Espinosa-Portalés",
      "Luc Andrea"
    ],
    "abstract": "Large protein language models provide a powerful framework for learning sequence-function relationships and guiding experimental design. However, architectural improvements are underexplored, especially in low-compute regimes of relevance for resource-constrained research laboratories. We show that the training cost for encoder-only transformer architectures can be reduced by leveraging modern architectural refinements, offering an encouraging performance / compute-efficiency trade-off. We introduce ProtModernBERT, a modernized BERT-style model pre-trained on amino acid sequences, and compare it with ProtBert, Amplify, and ESM2 across a set of supervised structural tasks -encompassing secondary structure prediction, disorder prediction, and subcellular localization- and ProteinGym's zero-shot functional benchmark. We find that ProtModernBERT matches or closely tracks the performance of Amplify-120M and ProtBert with up to 80-90\\% reduction in pre-training FLOPs, and narrows the gap to ESM2 when controlling for pre-training. Our analysis using a cluster-based validation protocol for hyperparameter selection and randomly initialized models disentangles the contributions of architecture and data, showing that modern components provide stronger inductive biases that are more consequential than parameter count in low-compute regimes.",
    "published": "2026-10-14T07:59:49Z",
    "updated": "2026-10-14T07:59:49Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "q-bio.QM"
    ],
    "url": "https://arxiv.org/abs/2610.19738"
  },
  {
    "id": "2610.19734",
    "title": "Object Pose from 2-D to 3-D Point and Line Correspondences",
    "authors": [
      "Thai Quynh Phong",
      "Radu Horaud",
      "Adnan Yassine",
      "Pham Dinh Tao"
    ],
    "abstract": "In this paper we present a method for optimally estimating the rotation and translation between a camera and a 3-D object from point and/or line correspondences. First we devise an error function and second we show how to minimize this error function. The quadratic nature of this function is made possible by representing rotation and translation with a dual number quaternion. We provide a detailed account of the computational aspects of a trust-region optimization method. This method compares favourably with Newton's method which has extensively been used to solve the problem at hand, with Faugeras-Toscani linear method [6] for calibrating a camera, and with the Levenberg-Marquardt non-linear optimization method. Finally we present some experimental results which demonstrate the robustness of our method with respect to image noise and matching errors.",
    "published": "2026-10-14T07:55:14Z",
    "updated": "2026-10-14T07:55:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.19734"
  },
  {
    "id": "2610.19733",
    "title": "Exact Cut Complexity of Equal-Length Proportional Cake Cutting",
    "authors": [
      "Yasushi Kawase",
      "Bodhayan Roy",
      "Mohammad Azharuddin Sanpui"
    ],
    "abstract": "We study proportional cake cutting under an equal-length constraint, where each of $n$ agents must receive a bundle of length exactly $1/n$ that is worth at least $1/n$ to that agent. Our main result determines the exact worst-case number of cuts needed to guarantee such an allocation, namely $2n-2$ for every $n$. This improves on the previously known quadratic upper bound. The proof combines the constrained necklace-splitting theorem with a recursive assignment argument based on Hall's theorem. The same bound extends to the stronger requirement of envy-freeness when $n$ is a prime power, and an $O(n^{1.525})$ upper bound holds for arbitrary $n$. We then ask whether such allocations can be computed. We first show that no deterministic protocol in the Robertson--Webb model terminates after finitely many queries on every instance and always returns an exact equal-length proportional allocation, even for two agents with identical valuations. For every $\\varepsilon>0$, however, $O(n^2/\\varepsilon)$ queries suffice to produce an allocation in which every agent receives a bundle of length exactly $1/n$ and value at least $1/n-\\varepsilon$, again using at most $2n-2$ cuts. Finally, we augment the Robertson--Webb model with two-knife queries. We show that recursive balanced halving attains the optimal bound of $2n-2$ cuts when $n$ is a power of two. For arbitrary $n$, we give a procedure using $O(n\\log n)$ cuts.",
    "published": "2026-10-14T07:54:24Z",
    "updated": "2026-10-14T07:54:24Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.DS",
      "cs.GT"
    ],
    "url": "https://arxiv.org/abs/2610.19733"
  },
  {
    "id": "2610.18613",
    "title": "Does self-distillation improve reasoning?",
    "authors": [
      "Jason Ken Adhinarta",
      "Raina Wu",
      "Ashutosh Sharma",
      "Avinash Balakrishnan",
      "Rameswar Panda",
      "Polina Golland",
      "Yoon Kim",
      "Zhang-Wei Hong"
    ],
    "abstract": "Self-distillation is an emerging approach that trains a model to imitate its own predictions when conditioned on privileged information, such as correct answers or environmental feedback. Recent methods have reported better sample efficiency and generalization than reinforcement learning (RL), but it remains unclear whether these gains extend beyond in-distribution evaluations and whether they stem from privileged distillation. In this paper, we revisit two representative methods, Self-Distillation Policy Optimization (SDPO) and On-Policy Self-Distillation (OPSD), across code, science, tool use, and math reasoning tasks. We find that their reported gains do not consistently generalize to unseen problems and are largely explained by overfitting or transferring existing reasoning behavior, rather than effectively using privileged information. Moreover, self-distillation gradients show weak alignment with policy gradients that directly optimize expected reward, questioning whether they provide an effective direction for policy improvement. Our experiments across Qwen3 models (1.7B-14B) and OLMo-3-7B suggest that effectively leveraging privileged information to improve reasoning remains an open challenge. Our code is available at https://github.com/sleepypandu/does-sd-improve-reasoning",
    "published": "2026-10-13T15:59:36Z",
    "updated": "2026-10-13T15:59:36Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18613"
  },
  {
    "id": "2610.18612",
    "title": "Nudge the Judge: Uncovering Program Decision Hijacking in Real-World Jev Applications",
    "authors": [
      "Yang Luo",
      "Tiantian Ji",
      "Zifeng Kang",
      "Yucheng Wang",
      "Yong Liu",
      "Zhiyi Yin",
      "Xinran Liu"
    ],
    "abstract": "System One models such as Jev change how software makes decisions by mapping open-ended semantic contexts into structured judgments that directly drive program execution. However, this paradigm introduces a new security risk, which we term Jev Program Decision Hijacking (JPDH): attacker-controlled contexts can redirect program decisions through schema-valid Jev judgments. Existing evaluations focus primarily on model-level attacks or predefined injection channels, leaving attack reachability and downstream security consequences in real-world Jev applications underexplored. In this paper, we present JevProbe, the first automated framework to evaluate JPDH by tracing adversarial influence from reachable context surfaces through program-consumed decisions to downstream security consequences in real-world Jev applications. Our key insight is that application logic maps diverse Jev judgments to observable decisions, enabling systematic, program-grounded attack evaluation. Across 228 popular real-world Jev applications and 2,273 test cases, 81.5% exhibit decision flips, of which 98.6% lead to potential downstream security impacts. Compared with the strongest adapted baseline, JevProbe improves macro-average Decision Flip Rate (DFR) by 50.4 percentage points, while existing defenses offer limited protection. We further construct JevProbeBench to support systematic evaluation of JPDH in real-world Jev applications. We have responsibly disclosed our findings to Jev application maintainers, pending their responses. The source code of JevProbe and the JevProbeBench dataset are publicly available on GitHub (https://github.com/xiaoxiaohg8d/JevProbe-).",
    "published": "2026-10-13T15:59:31Z",
    "updated": "2026-10-13T15:59:31Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18612"
  },
  {
    "id": "2610.18610",
    "title": "Jev-ToM: Evaluating Theory of Mind in Typed Decision Models",
    "authors": [
      "Kawai Chung",
      "Chunkit Chan",
      "Yuxuan Liu",
      "Yauwai Yim",
      "Xi Yang",
      "Wenbin Hu",
      "Huihao Jing",
      "Chiu Yeung Tang",
      "Changxuan Fan",
      "Ki Sen Hung",
      "Tsun On Kwok",
      "Haoran Li"
    ],
    "abstract": "Dialogue and collaborative assistants repeatedly judge what a partner knows, believes, or intends. Typed decision models offer a potential alternative to generative large language models for bounded Theory of Mind (ToM) selection. We present Jev-ToM, comparing five typed decision models and seven generative baselines on 11,117 English text questions from nine ToM benchmarks across six capability groups. TypeSafe Jev reaches 73.2% source-balanced accuracy including native controls and ranks first or second across all six capabilities, leading beliefs, goals/desires/intentions, and emotions. Other typed models show distinct strengths across tasks. Separate resource comparisons suggest that Jev could reduce the cost and waiting time of repeated ToM selection. Confidence-based selection remains benchmark-dependent, and supplied reasons can repair errors or overturn correct answers depending on their attachment. Candidate expansion reveals distinct selection and output-validity problems. Related-question cues account for most of Jev's downstream gains, with task-dependent effects from predicted states. The findings motivate testing Jev as a ToM selection component in assistants, with task-specific confidence calibration, candidate design, and output validation as integration priorities.",
    "published": "2026-10-13T15:59:00Z",
    "updated": "2026-10-13T15:59:00Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18610"
  },
  {
    "id": "2610.18609",
    "title": "DPOison-VL: Clean Preference Poisoning in Vision-Language Direct Preference Optimization",
    "authors": [
      "Chengtao Jian",
      "Kai Yang"
    ],
    "abstract": "Direct Preference Optimization (DPO) has become a widely adopted approach for aligning vision-language models (VLMs), yet the security of multimodal preference data remains largely unexplored. Existing preference poisoning attacks either corrupt explicit supervision signals or require visible triggers, making them detectable under human inspection. We introduce DPOison-VL, the first clean preference poisoning attack against VLM-DPO, which manipulates model alignment solely through imperceptible perturbations on a small fraction of training images, while leaving all prompts, responses, and preference annotations semantically intact. We formulate poison construction as a bilevel optimization and derive a gradient alignment surrogate that efficiently steers image perturbations toward the attacker-specified preference. We further introduce a preference displacement score for principled poison selection with provable first-order optimality under a fixed poison budget, and derive a sufficient condition for preference inversion. Extensive experiments across diverse attack tasks, different VLM architectures and scales, and baseline comparisons demonstrate that DPOison-VL achieves up to 98\\% ASR with only 2\\% poisoned data and exhibits cross-model transferability, while largely preserving clean accuracy and general utility. Our findings reveal a critical vulnerability in VLM-DPO, where imperceptible image perturbations in preference training data can silently redirect alignment.",
    "published": "2026-10-13T15:58:58Z",
    "updated": "2026-10-13T15:58:58Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18609"
  },
  {
    "id": "2610.18607",
    "title": "Recasting DiT for Extreme Image Compression with Hierarchical Visual Priors",
    "authors": [
      "Yunuo Chen",
      "Jingnan Gao",
      "Bing He",
      "Jinjing Zhao",
      "Chuqin Zhou",
      "Xiaoyue Ling",
      "Li Song",
      "Guo Lu",
      "Wenjun Zhang"
    ],
    "abstract": "Pretrained diffusion models provide powerful generative priors for extreme image compression, but their stochastic, iterative generation processes are not designed to decode compressed representations directly. We present PrismCodec, which recasts a pretrained Diffusion Transformer (DiT) as a bitstream-grounded one-step generative decoder. PrismCodec uses the decoded representation in two complementary roles: a projected codec state defines the starting state for generation, while hierarchical visual priors derived from the same decoded latent provide semantic and structural guidance. To bridge the gap between stochastic, iterative generation and deterministic one-step decoding, we develop a progressive adaptation strategy. We first learn codec-conditioned transport from a noisy neighborhood centered on the codec state, distill it into a one-step mapping, and finally anneal the source perturbation to zero during end-to-end optimization. The resulting decoder reconstructs deterministically from the received representation without additional conditioning bits. Across Kodak, CLIC, and DIV2K, PrismCodec consistently improves rate-perception performance over prior generative codecs, achieving BD-rate reductions of 70-75% in LPIPS and 75-81% in DISTS over StableCodec. Code will be released upon acceptance.",
    "published": "2026-10-13T15:58:40Z",
    "updated": "2026-10-13T15:58:40Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.18607"
  },
  {
    "id": "2610.18606",
    "title": "Beyond Answer Voting: Fine-Grained Correction of LLM Reasoning through Graph Alignment across Sampled Traces",
    "authors": [
      "Haotian Liu",
      "Yingjian Chen",
      "Xiaohang Xu",
      "Lang Huang",
      "Yusuke Iwasawa",
      "Yutaka Matsuo",
      "Irene Li"
    ],
    "abstract": "Large language models increasingly tackle tasks that require multi-step reasoning, where errors in intermediate claims can affect the final answer. Self-consistency (SC) improves reasoning by voting over sampled final answers, but its vote leaves intermediate disagreements unresolved. To address this problem, we introduce DDRG (Disagreement-Driven Verification Guided by Reasoning Graphs), a framework for selective correction from a frozen bank of reasoning traces. Our insight is that graph alignment can expose claim-level disagreements and provide correction evidence without expanding the sampled trace bank. DDRG builds source-grounded claim graphs and sends localized conflicts to an answer-blind verifier. A verifier-supported refutation that reaches the majority answer's supporting path triggers one focused repair; otherwise, DDRG returns the exact SC vote. Experimental results across five benchmarks show that native zero-shot DDRG improves macro-average accuracy over direct answering by 8.65 and 15.83 percentage points for Qwen2.5-7B and Llama3.1-8B. It also exceeds CoT, the evaluated GoT and GoV question-answering adaptations, and SC on this macro metric. DDRG links local verification to selective correction without enlarging the initial candidate bank.",
    "published": "2026-10-13T15:58:02Z",
    "updated": "2026-10-13T15:58:02Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18606"
  },
  {
    "id": "2610.18604",
    "title": "LLM2R: From Large Language Models to 3D Reassemblers",
    "authors": [
      "Zhouhan Zhong",
      "Qiuhong Shen",
      "Xingyi Yang",
      "Jinyi Xu",
      "Xinchao Wang"
    ],
    "abstract": "3D part assembly aims to reconstruct a complete shape from a set of unassembled parts by predicting a rigid SE(3) transformation for each part. Because the placement of a part is rarely determined by its own geometry, the task demands reasoning over the entire part set, and existing methods, which rely on pairwise relations or iterative generation and verification, scale poorly to objects with many parts. We present LLM2R, which casts part assembly as sequence modeling with a pretrained decoder-only large language model (LLM): a Point-BERT encoder and a Q-Former compress each part into a block of geometric tokens, the blocks of all parts are concatenated, and a causal LLM adapted with Low-Rank Adaptation (LoRA) processes the sequence in one forward pass. Causal attention, however, lets the hidden states of a part observe only the parts that precede it. LLM2R therefore appends a block of learnable summary tokens after the last part: these tokens follow every part, so their states aggregate the whole assembly at a constant token cost, and a part-aware pose head fuses each part's states with them before predicting its rotation and translation. One architecture thus handles semantic and geometric assembly and predicts all poses in a single non-autoregressive pass. LLM2R achieves the highest part accuracy and success rate on all three PartNet categories, the best rotation error, translation error, and part accuracy on PartNeXt, and the lowest translation error and fastest inference on Breaking Bad, where only a fracture-specialized method is more accurate. Its advantage grows with the number of parts: at 100 parts it exceeds GARF by 33.5 points in part accuracy on Breaking Bad and Assembler by 29.1 points on PartNet, and it transfers zero-shot to unseen categories with more than 16 points higher part accuracy than the strongest of three baselines.",
    "published": "2026-10-13T15:57:41Z",
    "updated": "2026-10-13T15:57:41Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.18604"
  },
  {
    "id": "2610.18603",
    "title": "AgentStripes: An Evidence-Graded Maturity Model for AI Agents",
    "authors": [
      "Nutan Kumar Naik",
      "Vijay Prasad Poudel",
      "Aditya Kumar Saroj",
      "Saurav Samantray",
      "Abhishek Patel"
    ],
    "abstract": "Benchmarks report what an Artificial Intelligence (AI) agent can do on a task suite, but not whether one released version has been engineered with the controls that make it reliable, safe and observable, or how strongly that is shown. This paper proposes AgentStripes, an evidence-graded maturity model for AI agents. It defines levels (0 to 7 stripes), process areas (12 areas holding 40 capabilities), three gates (basic, safety, proof) that hold an agent at a level however high its score, and evidence grades E0 to E5. Each applicable capability receives a rating from 0 to 3 and a separate evidence level; these are combined into a credit, aggregated into a severity-weighted score and converted into stripes that the gates limit. Instruments gather evidence, language-model judges interpret it under explicit criteria, and the arithmetic is deterministic. The model is compared with standards at topic level without a claim of conformance, and an unexecuted validation protocol is specified. An empirical evaluation (exploratory, non-confirmatory) of 30 public Python agent repositories, with static evidence only, is a demonstration and not a validation: static evidence caps every final stripe at 2, 26 repositories end at one stripe and 4 at two, and this distinction is unreliable, since re-judging changed the final stripe of 4 of 22 repositories (engine, dossier and panel changed), whereas none of 8 panel-only repeats, all at stripe 1, changed. The parameters are expert conventions without outcome based calibration, and the stripes have not been shown to predict reliability or safety.",
    "published": "2026-10-13T15:57:28Z",
    "updated": "2026-10-13T15:57:28Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.18603"
  },
  {
    "id": "2610.18602",
    "title": "Auditing Future-Memory Use in Point-in-Time Language Agents",
    "authors": [
      "Rongtian Ye"
    ],
    "abstract": "Point-in-time (PIT) agents can recall post-cutoff facts even when their external evidence respects a historical cutoff. We examine whether this access predicts evidence gathering in 48 historical company-comparison tasks. Independent closed-book revenue probes identify the better-remembered company for each model on tasks with unequal recall, fixing the predicted direction before agent runs. We then compare paired runs with real or anonymized company identities while keeping external evidence PIT-valid. Both Qwen and DeepSeek recalled future facts, but neither supported the prespecified shift toward the better-remembered company. Qwen's four allocation estimates on 28 unequal-recall tasks were negative, with descriptive intervals spanning zero. A prospective DeepSeek replication showed an inverse pattern across all four metrics on 20 such tasks, with intervals below zero. These estimates remained negative after each company, pair, and future-fact omission, and all four post-hoc max-T-adjusted sign-flip p-values were below .05. In a prospectively specified follow-up, explicit future facts produced small estimated shifts away from the supplied-fact company, with intervals spanning zero, while final choices shifted toward it. The mechanism behind the natural inverse pattern remains unresolved. These findings support separate assessments of memory accessibility, search allocation, and final outputs alongside cutoff checks on external evidence.",
    "published": "2026-10-13T15:56:58Z",
    "updated": "2026-10-13T15:56:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.18602"
  },
  {
    "id": "2610.18598",
    "title": "Rethinking Projector Training in Multimodal LLMs",
    "authors": [
      "Fabian Gröger",
      "Naël Ouerghemi",
      "Shuo Wen",
      "Maria Brbić"
    ],
    "abstract": "Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image-caption datasets, followed by joint training of the full multimodal model. Despite its widespread use, the role of the projector training stage remains poorly understood. We find that (i) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and (ii) projectors trained on different datasets can be linearly interpolated while largely preserving performance. These results suggest that projector training mainly performs a coarse alignment, which many different projectors achieve equally well. Motivated by these findings, we propose PORTAL, a training-free projector initialization that requires neither paired image-caption data nor gradient-based optimization, but only per-modality summary statistics. PORTAL computes an optimal-transport-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, so that the projector training stage can be skipped entirely. Without any paired data, PORTAL matches the standard pipeline trained on 558k image-caption pairs across six LLM backbones, two vision encoders, and 16 benchmarks. It outperforms that pipeline in $3$ of $7$ (vision encoder, LLM) settings and reaches an average $98\\%$ of its score across the other four.",
    "published": "2026-10-13T15:53:53Z",
    "updated": "2026-10-13T15:53:53Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.18598"
  },
  {
    "id": "2610.18597",
    "title": "PhysicsSliders: Learning Physical Controls for Audio Foley Generation",
    "authors": [
      "Peiwei Chang",
      "Yongqiang Chen",
      "Yuelan Cheng",
      "Liting Gao",
      "Yishun Lu",
      "Li Zhang",
      "Mark D. Plumbley",
      "Philip J. B. Jackson",
      "Wenwu Wang"
    ],
    "abstract": "Physical properties provide intuitive controls for sounds made by interacting objects. The challenge is to make a generative model respond predictably to these controls, both individually and in combination. We present \\method\\ (PXS), trained on simulated contact sounds with 15 material, geometry and contact parameters. Two separately trained variants accept direct parameter inputs or numerical captions. PXS controls hardness, size, speed and damping, supports room descriptions and produces spectrally distinct outputs at fixed targets. When controlling damping and size together, specifying thickness improves frequency accuracy and joint target delivery. Measurements from real recordings define effective-damping targets, which simulator inversion maps to generation inputs without real-audio fine-tuning. Across 18 impact classes from five real-audio datasets, PXS-Physical follows these targets with mean grouped Spearman correlation $ρ=0.976$ and class-median error 0.094 dex (a factor of 1.24).",
    "published": "2026-10-13T15:53:45Z",
    "updated": "2026-10-13T15:53:45Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18597"
  },
  {
    "id": "2610.18596",
    "title": "ACCRUE: Continual Off-Policy Reinforcement Learning for Robot Foundation Models",
    "authors": [
      "Changyeon Kim",
      "Kimin Lee",
      "Yashraj Narang",
      "Yijie Guo"
    ],
    "abstract": "Reinforcement learning (RL) post-training improves robot foundation models (RFMs) beyond their demonstrations, but real-world deployment demands more: learning new tasks efficiently while retaining previously acquired behaviors. Existing continual RL methods on top of VLAs mitigate forgetting but rely on on-policy updates with limited forward transfer, whereas off-policy methods improve single-task sample efficiency without addressing learner persistence across tasks. We propose ACCRUE, a continual off-policy RL framework that carries lightweight actor and critic networks across tasks, allowing each stage to reuse behavioral and value knowledge acquired through prior RL. The inherited critic adapts only on current-task transitions and guides current-task actor learning, while prior behavior is preserved by distilling the actor toward cached targets on a small number of retained episodes. Fixed visual features keep the inherited learner and its replay compatible with base-policy updates. Across contact-rich assembly sequences in simulation and on real-robot hardware, ACCRUE accelerates subsequent-task learning with near-zero forgetting and significantly reduces real-robot training time by 31.0\\% to 68.5\\%.",
    "published": "2026-10-13T15:53:26Z",
    "updated": "2026-10-13T15:53:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.18596"
  },
  {
    "id": "2610.17019",
    "title": "Understanding Personalization Gains in Whisper",
    "authors": [
      "Sergei Katkov",
      "Antonio Liotta"
    ],
    "abstract": "Whisper-style ASR models provide strong zero-shot transcription, but their residual errors are not evenly distributed across datasets, recording conditions, and metadata-based groups. We study when lightweight low-rank adaptation (LoRA) improves Whisper and whether observed gains require group-specific adapters. Across Common Voice, LibriSpeech, and VoxPopuli, we compare zero-shot Whisper, pooled LoRA, and group-specific LoRA under matched within-group splits. We find that adaptation is not uniformly beneficial: gains are concentrated in difficult Common Voice groups, are consistent on VoxPopuli, and largely disappear on low-error LibriSpeech. Crucially, pooled LoRA often matches, and sometimes clearly outperforms, group-specific LoRA. Gains over zero-shot should therefore be tested against matched pooled adaptation before being interpreted as evidence of personalization.",
    "published": "2026-10-12T15:59:09Z",
    "updated": "2026-10-12T15:59:09Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.17019"
  },
  {
    "id": "2610.17016",
    "title": "ProbabilityBench: Model Evaluation and Calibration with Exact Ground-Truth Uncertainty",
    "authors": [
      "Yuyang Dai",
      "Yuting Tang",
      "Futoshi Futami",
      "Takashi Ishida"
    ],
    "abstract": "Evaluating model uncertainty on real-world data is challenging because each instance provides only a single observed label, leaving true conditional class probabilities unknown. To address this, we introduce ProbabilityBench, a benchmark that provides exact, instance-level class probabilities across three simulated text-based domains: peer review, covert information transfer, and credit risk. By explicitly defining the full data-generating process for each environment, we analytically compute both exact class probabilities and Bayes error. Furthermore, we provide a theoretical guarantee that rendering these cases into natural-language memos strictly preserves their underlying generative probabilities. This exactness enables direct measurement of reported probability quality via KL divergence. Across 16 evaluated models, most models on the observed cost-quality Pareto frontiers are decision models, including Jev and Perplexity Decider. Finally, ProbabilityBench serves as a meta-evaluation framework, leveraging known ground-truth values to benchmark the accuracy of standard calibration metrics and Bayes-error estimators themselves.",
    "published": "2026-10-12T15:58:15Z",
    "updated": "2026-10-12T15:58:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.17016"
  },
  {
    "id": "2610.17015",
    "title": "DIME: Scaling Facial Representation Learning via Differential Masked Autoencoding",
    "authors": [
      "Hao Yu",
      "Haoyu Chen",
      "Hui Wei",
      "Yan Jiang",
      "Nicu Sebe",
      "Guoying Zhao"
    ],
    "abstract": "Scaling up data and model capacity has driven substantial progress in visual representation learning. However, conventional pretext tasks exhibit diminishing returns on fine-grained facial analysis. We attribute this to a scaling bottleneck: these tasks model each image's appearance and are dominated by identity, pose, and illumination, so subtle within-identity facial differences contribute little to the training signal. We introduce DIME, a differential masked autoencoder for large-scale facial representation learning. DIME builds on a simple observation: two images of the same person share identity-specific appearance, so their difference exposes facial changes. DIME reconstructs both masked images in an identity-matched pair and, through an Explicit Differential Direction Supervision (EDDS) objective, aligns the direction of their reconstructed difference with the true difference, while source isolation makes each reconstruction depend only on its own image. Shared appearance cancels in this difference, and because EDDS ignores magnitude, subtle facial changes count as much as large pose or illumination changes. DIME uses identity labels only to form pretraining pairs, requires no dense annotations, and learns dense facial representations with emergent part-level semantics. We pretrain DIME on 20 million high-resolution facial images consolidated from existing face datasets. DIME's AU detection performance continues to improve as pretraining data scales from 6M to 20M images, with its BP4D F1 increasing by 5.9 points, while MAE gains only 0.5 points on the same subsets. DIME also outperforms specialized facial methods on AU detection, AU intensity estimation, cross-domain anti-spoofing, landmark localization, head pose estimation, face parsing, and face generation.",
    "published": "2026-10-12T15:57:06Z",
    "updated": "2026-10-12T15:57:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17015"
  },
  {
    "id": "2610.17014",
    "title": "MAGNET: Manifold-Aware Graph Diffusion Network for Connectome Generation",
    "authors": [
      "Protyay Dey",
      "Ayush Roy",
      "Hyuna Cho",
      "Won Hwa Kim",
      "Vishnu Suresh Lokhande"
    ],
    "abstract": "Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class-conditional geometry buried under coarse labels. We propose MAGNET, a Manifold-Aware Graph Diffusion Network which uses a normalized-Cholesky representation of the manifold of correlation matrices that guarantees validity. MAGNET lifts noisy latent states into ROI-level region tokens and performs denoising with a relational inductive bias over brain atlas regions. To deal with structural problems induced by coarse labels, MAGNET employs class-anchored conditioning, amortized structural bridge, and relevance-preserving corruption. Across ABIDE, ADNI, and OASIS-3, MAGNET consistently achieves favorable results compared to previous manifold-aware approaches, demonstrating improvements of 7-21% in class-conditional fidelity ($α,β$-F1) across three cohorts and better sampling efficiency. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero-shot setting, improving subclass covariance alignment ($λ$-MSE) by over 30%. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis. Moreover, efforts in making the diffusion denoising class-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings. The code repository can be found at https://github.com/protyayofficial/MAGNET.",
    "published": "2026-10-12T15:56:09Z",
    "updated": "2026-10-12T15:56:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17014"
  },
  {
    "id": "2610.17009",
    "title": "MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation",
    "authors": [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Hongchen Luo",
      "Xueyang Fu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    "abstract": "Reinforcement learning (RL) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models (MGMs) remains largely underexplored. Existing approaches that directly adapt Group Relative Policy Optimization (GRPO) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high-entropy subject token exploration while amplifying intra-group reward variance through exploratory-exploitative routing to yield more discriminative advantage estimates. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them. Extensive experiments on multiple text-to-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28.89 to 36.39, achieving state-of-the-art performance.",
    "published": "2026-10-12T15:52:58Z",
    "updated": "2026-10-12T15:52:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.17009"
  },
  {
    "id": "2610.17002",
    "title": "Governing Copyright Responsibly in the Era of Generative AI",
    "authors": [
      "D. Kochetkov"
    ],
    "abstract": "Large language models are trained on collections that may include scholarly works, while authors generally lack work-level information about whether and how their works were used. This paper asks how copyright governance frames and operationalises the protection of such authors, and what a responsible alternative would require. Forty legislative, judicial and soft-law instruments issued between 2019 and 2026 were coded deductively against a framework derived from Responsible Research and Innovation theory, yielding 1,337 category assignments across 835 segments. The European Union and the United States are the primary cases; the United Kingdom, China and international bodies serve as comparators. Normative orientation and the distribution of responsibility dominate the corpus, while reflexivity is the least represented category and reaches its minimum in the US sub-corpus. Both primary jurisdictions frame protection procedurally rather than as an entitlement, and no instrument in the corpus creates a general author-facing attribution duty for the use of works in AI training. From the coded gaps, the paper derives a six-instrument governance design and a capacity-based allocation of responsibility among developers, publishers, collecting societies, funders, institutions, regulators, and individual authors.",
    "published": "2026-10-12T15:50:05Z",
    "updated": "2026-10-12T15:50:05Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.17002"
  },
  {
    "id": "2610.16998",
    "title": "Glasseek: A Transparent Recipe for Training and Trustworthy Evaluation of DeepSearch Agents",
    "authors": [
      "Cong Pang",
      "Jiaqi Su",
      "Chengrui Wu",
      "Kuihao Yan",
      "Tianrui Zhang",
      "Zixuan Qiu",
      "Chao Lin",
      "Zixiu Lin",
      "Zixuan Chen",
      "Zelin Xiao",
      "Tiankuo Yao",
      "Jiawei Hong",
      "Zixuan Chen",
      "Dan Xu",
      "Lewei Lu",
      "Wenjie Wang",
      "Xin Lou"
    ],
    "abstract": "Deep search enables language agents to solve complex information-seeking tasks through iterative web exploration. However, developing robust open-source agents remains challenging for three reasons. First, opaque trajectory-construction pipelines make training data difficult to audit and reproduce. Second, context compression can create a substantial mismatch between training and inference. Third, agents may retrieve benchmark content from the open web during evaluation, contaminating the results and overstating their performance. To overcome these bottlenecks, we introduce Glasseek, a fully transparent deep search framework spanning the complete development lifecycle, releasing all data, model weights, training recipes, and code. Specifically, for data construction, we establish a verifiable trajectory curation pipeline that systematically generates high-quality exploration paths. For training, we propose Compaction-Managed GSPO (CM-GSPO), which uses the same policy for search and summarization while optimizing only execution sub-trajectories, enabling end-to-end search-policy training across context-compaction boundaries. For evaluation, we conduct the first systematic audit of test-set leakage in open-web agents and release a modular anti-leakage plugin that seamlessly integrates into existing evaluation harnesses. Under this rigorous evaluation protocol, our 9B agent outperforms frontier proprietary agents across almost all deep research benchmarks spanning diverse task types, and achieves the best overall performance among recent open-weight agents, setting a new state of the art at the 9B scale.",
    "published": "2026-10-12T15:48:45Z",
    "updated": "2026-10-12T15:48:45Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16998"
  },
  {
    "id": "2610.16990",
    "title": "TabGift: A Context-Efficient Foundation Model for Tabular Data Generation",
    "authors": [
      "Yu-Sheng Li",
      "Jun-Peng Jiang",
      "Han-Jia Ye"
    ],
    "abstract": "Tabular data generation aims to synthesize realistic samples from limited observations while faithfully capturing the underlying data distribution. Tabular foundation models (TFMs), pretrained on diverse tabular tasks and adapted through in-context learning, have demonstrated strong predictive capabilities, suggesting the potential of extending this paradigm to tabular data generation. However, the strong predictive performance of TFMs often relies on sufficiently large context sets, whereas tabular generation is typically needed precisely when target data are scarce. Extending the foundation-model paradigm to generation therefore requires reliable distribution inference from only a limited context. To this end, we propose TabGift, a context-efficient tabular foundation model enabling both efficient distribution modeling and effective generation from only a few context samples. TabGift maps heterogeneous tables into a shared latent space with a pretrained tabular encoder, where an in-context diffusion model learns to denoise latent samples conditioned on a small set of clean examples. This design transfers generative priors across datasets and enables distribution inference from limited context, while a lightweight dataset-specific MLP decoder maps generated representations back to the original data space. Experiments on 7 classification and 11 regression datasets show that TabGift consistently outperforms representative baselines in synthetic data quality, with particularly strong gains under limited-context settings, while achieving substantially faster adaptation and generation.",
    "published": "2026-10-12T15:43:52Z",
    "updated": "2026-10-12T15:43:52Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16990"
  },
  {
    "id": "2610.16988",
    "title": "Self-Supervised Learning of Semantically Consistent Visual Features via a Simple 3D Prior",
    "authors": [
      "Sebastian Day",
      "Oisin Mac Aodha"
    ],
    "abstract": "Visual features extracted from vision models like DINOv2 or Stable Diffusion enable high quality semantic correspondence between images. However, such features exhibit documented limitations that hinder accurate correspondence estimation such as the inability to disambiguate the left from right for categories exhibiting symmetries or repeated parts. Previous attempts to improve these features rely on using supervised data such as annotated keypoint pairs or camera pose information, or make restrictive topological assumptions, such as modelling the object of interest as a 3D sphere. We introduce a new self-supervised approach that allows us to learn features for topologically complex object categories using a simple prior. Instead of relying on an expensive instance-level analysis by synthesis pipeline, our approach makes use of contrastive learning and distribution matching at the global dataset-level to learn the coarse shape and appearance of a category. Combined with additional geometric losses, this enables us to replicate the global and local statistics of visual features which match those that are extracted from real images. Quantitative results are presented across several challenging object categories, demonstrating the effectiveness of our approach.",
    "published": "2026-10-12T15:42:59Z",
    "updated": "2026-10-12T15:42:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.16988"
  },
  {
    "id": "2610.16985",
    "title": "AUGUstus: Autonomous Driving VLA Model with Unified Generation and Understanding",
    "authors": [
      "Yuqi Ye",
      "Caigao Jiang",
      "Zhuonan Wang",
      "Congyuan Pei",
      "Chao Qu",
      "Changhao Peng",
      "Junhong Lin",
      "Qize Yu",
      "Zetian Song",
      "Guangzhao Fu",
      "Chongruo Wu",
      "Shiyu Huang",
      "Shuchang Zhou",
      "Honggou Yang",
      "Wei Gao"
    ],
    "abstract": "Vision-language-action (VLA) models show strong potential for end-to-end autonomous driving by leveraging world knowledge and understanding to excel in long-tail scenarios. However, current VLAs have two limitations: 1) Degeneration into vision-action (VA) models. For low latency, regression/flow-based methods directly generate actions but underuse VLM understanding, causing unsafe, unexplainable actions. 2) Autoregressive high latency. Autoregressive methods sequentially generate chain-of-thought (CoT) and action tokens, fully leveraging VLM understanding, but high latency hinders deployment. To enable low-latency deployment while using CoT to assist action generation, we propose AUGUstus, an Autonomous-driving VLA model with Unified Generation and Understanding. We unify diffusion-based action generation and autoregressive CoT understanding in one model, where understanding only serves generation. Joint CoT supervision preserves VLM spatial understanding in shared representation for safer, more accurate trajectories. AUGUstus-mode orders action generation before CoT, so CoT supervises reliable actions during training while inference needs only action output, enabling low latency. AUGUstus-GRPO, a unified GRPO algorithm, jointly optimizes action and CoT, improving action performance. Experiments show AUGUstus achieves 94.6 PDMS on NAVSIMv1 and 90.7 EPDMS on NAVSIMv2, SOTA planning without scorer module. On nuScenes, it achieves average L2 error 0.27 m and average collision rate 0.05%, best among compared methods. To validate AUGUstus practicality, we train on in-house data with 512 NVIDIA H800 GPUs for ~2 days, evaluate on an internal 1,000 km dataset, and preliminarily deploy on a real vehicle, achieving 12 Hz operation. Project page: https://augustus-ad.github.io",
    "published": "2026-10-12T15:42:09Z",
    "updated": "2026-10-12T15:42:09Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16985"
  },
  {
    "id": "2610.16984",
    "title": "From Suboptimal to Optimal: One-Step Latent Flow Policies for Offline Reinforcement Learning",
    "authors": [
      "Shenghua Lu",
      "Zixuan Yang",
      "Rongxu Zhao",
      "Bohao Qu",
      "Jifeng Hu",
      "Hechang Chen"
    ],
    "abstract": "Offline reinforcement learning aims to learn effective policies from fixed datasets without environment interaction. Although generative models such as diffusion and flow matching enhance policy expressiveness, they typically start from uninformative Gaussian noise and generate actions through multi-step iteration, leading to high computational costs and failing to effectively leverage suboptimal trajectories in datasets. We propose MeanFlow2Better (MF2B), which reformulates offline RL as generative decision chunk optimization from current performance status to better performance status in a high-level latent decision space. MF2B maps trajectory chunks to high-level latent decision representations through an encoder, placing generation starting points within a structured decision space sculpted by behavioral data. The model learns a shared conditional mean velocity field in this space, constructing two flow mappings: from Gaussian-Induced Decision Sources toward positive behavioral decision regions, and from suboptimal decisions toward high-value decision regions. Both flow mappings complete decision refinement through one-step ODE integration over the unit time interval $Δt=1$, requiring neither multi-step iterative sampling nor backpropagation through time. Furthermore, we propose hierarchical chunk-level advantage to guide the flow direction toward high-return regions, where the high-level decisions cover multiple low-level actions, leading to sequence length compression from $T$ to $K \\approx T/H$ and significantly lower computational overhead. On the D4RL Gym-MuJoCo benchmark, MF2B achieves an average score of 90.91, matching or surpassing strong baselines.",
    "published": "2026-10-12T15:41:40Z",
    "updated": "2026-10-12T15:41:40Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.16984"
  },
  {
    "id": "2610.16980",
    "title": "PRAISE: A Reproducible Workflow for Non-Programmer Scientists to Implement Published AI Models",
    "authors": [
      "Max Achterweust",
      "Stefan Groot Nibbelink",
      "Vincent J. de Beer",
      "Stefan Schipper",
      "Zeynep Yüksektepe",
      "Pedro Andrade da Silva",
      "Aurelia Peppelaar",
      "Martijn J. van der Willigen",
      "Christophe B. Minkenberg",
      "Robert F. van der Willigen"
    ],
    "abstract": "Artificial Intelligence (AI) models are increasingly developed, published and used across scientific fields. Researchers, students and industry professionals who want to apply these models to their own research questions often lack the programming and data science expertise to do so. Existing guidelines cover single steps, but not the route from a published model to working predictions on one's own data. Here we present the hands-on workflow PRAISE, a Practical, Reproducible AI-model Implementation for Science and Education, that helps non-programmers implement published AI models step by step. Because implementations rarely work the first time, PRAISE anticipates common failures and provides a fallback route for each. As a proof of principle, three BSc chemistry students and their tutor applied PRAISE without prior programming or data science knowledge. They reproduced, validated and extended a state-of-the-art model that predicts enzyme-substrate interactions. This shows that with PRAISE, implementing an AI model from the literature becomes a learnable skill, one that turns non-programmer scientists from users into evaluators and improvers of AI models.",
    "published": "2026-10-12T15:39:12Z",
    "updated": "2026-10-12T15:39:12Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.16980"
  },
  {
    "id": "2610.15715",
    "title": "History Replays Itself: Unleashing Long-Context Capability in Linear Attention",
    "authors": [
      "Li Nanbo",
      "Firas Laakom",
      "Yilan Zhang",
      "Piotr Piękos",
      "Yimeng Chen",
      "Liangyu Wang",
      "Yifan Xu",
      "Mateusz Ostaszewski",
      "Dandan Guo",
      "Wenyi Wang",
      "Yanning Dai",
      "Yuhui Wang",
      "Jürgen Schmidhuber"
    ],
    "abstract": "Linear attention promises the efficiency needed for long-context language modelling, yet its fixed-size recurrent state must simultaneously support ongoing computation and preserve information from an ever-growing history. This coupling has reinforced a prevailing view that the state's memory capacity defines the model's long-context capability. We challenge this presumed ceiling: \\emph{recurrent computation need not bear the full burden of long-term storage}. We introduce NoteBank, a sparse episodic memory that archives selected text before future queries are known, uses the backbone's native features for writing and addressing, and reads retrieved evidence through its native forward computation via replay. This \\emph{training-free, plug-and-play} interface requires no external embedding model, separately trained retriever, or separate neural reader. At one million tokens, it raises Gated DeltaNet's mean accuracy across six RULER retrieval tasks from 1.7% to 70.3%, with no observed significant retrieval degradation from 4K to 1M tokens. This recovery adds $\\leqslant$0.025% to analytical FLOPs, with persistent context storage approximately 1/2,600 that of a Transformer's full MHA KV cache at matched width, depth, and precision. Experiments extend from three 1.3B recurrent backbones to Mamba-2-8B and post-trained Qwen3.5-9B, demonstrating gains on LongBench v1/v2 and MemoryAgentBench. Together, these results show that sparse evidence storage and native replay can substantially expand the long-context capability of pretrained linear attention models while retaining the efficiency of recurrent computation.",
    "published": "2026-10-11T15:58:04Z",
    "updated": "2026-10-11T15:58:04Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.15715"
  },
  {
    "id": "2610.15714",
    "title": "MedHarnessBench: A Unified Benchmark for Healthcare Agent Evaluation",
    "authors": [
      "Rui Tang",
      "Hongqiu Wang"
    ],
    "abstract": "Healthcare agents must transform longitudinal clinical evidence into reliable actions through heterogeneous tools and stateful workflows, conditions under which model-centric systems may lose context, misuse tools, fail to verify consequential transitions, or cross authorization boundaries. Existing medical-agent benchmarks primarily emphasize terminal task outcomes, making it difficult to determine whether execution failures arise from the agent model, the runtime harness, or their interaction. We present the Medical Harness Protocol, an outcome-preserving framework that independently evaluates seven healthcare-specific process dimensions: Care Action Fulfillment, Clinical Resource Competence, Patient-Evidence Alignment, Clinical Workflow Continuity, Clinical Auditability, Closed-Loop Verification, and Clinical Conduct Boundaries. A normalized intervention trace further tracks whether runtime support is available, activated, delivered, adopted by the agent, and propagated into subsequent behavior. We instantiate the protocol as MedHarnessBench, comprising 342 executable tasks across FHIR/EHR operations, healthcare-administration interfaces, and multimodal clinical tools. Across more than 16,000 controlled task executions, MedHarness yields broad improvements in terminal task success, intermediate subtask completion, and healthcare-specific process quality. We further evaluate MedHarness against multiple general-purpose harnesses and use controlled single-fault perturbations to verify the sensitivity and discrimination of the seven-dimensional evaluation. These results demonstrate that healthcare-specific runtime support can substantially improve both task completion and execution quality, while revealing failures that terminal outcomes alone cannot capture. Code and resources are available at https://github.com/Tomry1114/Awesome-Agent-Harness-for-Healthcare.",
    "published": "2026-10-11T15:57:52Z",
    "updated": "2026-10-11T15:57:52Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15714"
  },
  {
    "id": "2610.15711",
    "title": "What DNA Foundation Models Learn Beyond Sequence Composition",
    "authors": [
      "Vincenzo Yuto Civale",
      "Andrew David Bagdanov",
      "Alberto Magi"
    ],
    "abstract": "Do genomic foundation models (FMs) provide predictive information beyond simple sequence composition? We evaluate frozen representations from five DNA FMs against normalized k-mer frequencies across 57 genomic classification datasets and two exploratory gene-expression regression tasks. Simple k-mer features remain competitive with most models, whereas NTv3 shows a consistent advantage; the ranking is robust to globally fixed and multi-scale k-mer baselines and alternative downstream probes. To test incremental predictive utility directly, we compare global 6-mer features with their concatenation with each FM embedding under a matched Random Forest protocol. NTv3 improves 46 of 57 datasets (mean $Δ$MCC = +0.072), while Caduceus provides smaller gains and the other models do not improve mean MCC. We separately decompose embeddings into a component linearly predictable from 6-mer frequencies and a ridge residual, finding that linear recoverability does not reliably indicate downstream utility. Exact 6-mer-preserving shuffles further reveal task-relevant sequence-order sensitivity, most pronounced for NTv3, although order sensitivity alone does not guarantee predictive improvements. Our results establish compositional features as essential controls and offer complementary diagnostics for evaluating the added value of frozen genomic representations, without making claims about fine-tuning capacity.",
    "published": "2026-10-11T15:51:29Z",
    "updated": "2026-10-11T15:51:29Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15711"
  },
  {
    "id": "2610.15710",
    "title": "Suggested Is Not Superseded: A Pre-Registered Evaluation of a System-One Model as a Memory-Retirement Gate",
    "authors": [
      "Xupeng Chen",
      "Chenqian Le"
    ],
    "abstract": "Long-term memory for assistants needs a gate that decides when a new utterance retires an old stored claim. Benchmark labels for this step mark a pair as changed or not, so they cannot tell a gate that acts on established change from one that acts on a hint. We write a task contract that separates the two (SUPERSEDED vs. NEEDS-CONFIRMATION vs. COMPATIBLE), label 500 test pairs built from STALE (change pairs plus same-user controls) with three LLM annotators and two human adjudicators (one author and a second annotator; provenance reported), and evaluate Jev, a typed \"System One\" decision model, under pre-registered hypotheses. Of the 179 test pairs STALE marks as changed, 72 meet the contract's bar for an established change. Jev never retired a claim on 141 same-conversation non-changes. Its failure is premature retirement: the binary gate retires 39.2% of claims whose change is only suggested. A three-way decision cuts this to 15.5% at a 15.3-point detection cost, which misses our pre-registered 10-point budget, and it lands on the binary gate's own threshold frontier; these verdicts hold under three readings of the gold labels. On a held-out vault scored against a second annotator's labels, a cascade that escalated uncertain cases to a reasoning model and looked best on development data was indistinguishable from simply raising the threshold (premature retirement 26.8% vs. 6.5% on dev). Part of the gap comes from the gold labels: relative to that annotator's reading, LLM-majority gold shares most of its errors with a same-family escalation model, and an identity for binary labels says how much such shared errors hide. The rest is small-sample selection on development data. For builders this means a binary score should not be wired to delete: route suggested changes to pending evidence, and do not trust a cascade selected on development data of this size.",
    "published": "2026-10-11T15:48:16Z",
    "updated": "2026-10-11T15:48:16Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15710"
  },
  {
    "id": "2610.15708",
    "title": "SpecForge: Recursive Self-Improvement for Coding Agents via Behavioral Specifications",
    "authors": [
      "Yutong Cheng",
      "Haifeng Chen",
      "Peng Gao",
      "Wei Cheng"
    ],
    "abstract": "Coding agents based on frozen language models can improve their performance by refining the external context they rely on, without updating model weights. We study recursive self-improvement through behavioral specifications: natural-language code documentation that describes the behavior of program entities and guides agents in generating correct code. We formulate a self-improvement loop in which an agent generates code from its current specifications, evaluates it with execution-verified tests, and refines the specifications based on observed failures. The improved specifications then guide subsequent generation, progressively improving the agent's understanding of the codebase. However, recursive refinement is challenging because program entities are interdependent. Improving the specification of one entity can inadvertently degrade the correctness of others, a phenomenon we call output coupling. This creates a whack-a-mole effect in which local improvements cause regressions elsewhere, preventing consistent progress. We introduce SpecForge, a multi-frontier tree search framework that addresses this challenge with three mechanisms: (i) Pareto-guided state selection preserves complementary specification states and prevents premature commitment; (ii) dependency-constrained entity selection prioritizes callee-before-caller refinement; and (iii) error-diversified expansion explores multiple refinements using different subsets of test failures. On DevEval+, SpecForge achieves the best performance across five backbone models, including a 94.9% solve rate with Claude-4.5-Sonnet and a 5.7-percentage-point average improvement over the strongest baseline. The improved specifications also make the agent better at tasks outside the loop: they transfer to cross-language translation and to new-feature implementation, where they outperform the benchmark-provided requirement documents.",
    "published": "2026-10-11T15:46:22Z",
    "updated": "2026-10-11T15:46:22Z",
    "categories": [
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.15708"
  },
  {
    "id": "2610.15705",
    "title": "bharatSetu: a 1M x 22 bridge for indic translation",
    "authors": [
      "Haq Nawaz Malik",
      "Nahfid Nissar",
      "Faizan Iqbal"
    ],
    "abstract": "India's Eighth Schedule recognises 22 languages, yet parallel data is uneven across them, and many language pairs, especially among lower-resource languages such as Bodo, Dogri, Santali and Kashmiri, lack direct bitext. We present BharatSetu 22-Indic 1M, a row-aligned table of 984,764 English sentences, each paired with machine translations into all 22 scheduled languages (21,664,808 Indic cells), generated with the sarvamai/sarvam-translate model family. Because every Indic cell in a row translates the same English sentence, any two columns form a translation pair: 462 directed Indic-to-Indic pairs, or 506 including English, without direct bitext. We call these pivot-derived pairs and propose a confidence layer that lets users choose how strictly each pair is connected. The corpus is machine-generated and not human-verified; quality is expected to vary by language, domain and sentence style, and pivot-derived pairs can inherit errors from both sides. We therefore release BharatSetu as a machine layer and propose a human-correction layer keyed to the same row identifiers, so that each corrected column upgrades every pair that uses it, together with an evaluation protocol. We report no translation-quality results.",
    "published": "2026-10-11T15:39:19Z",
    "updated": "2026-10-11T15:39:19Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15705"
  },
  {
    "id": "2610.15702",
    "title": "RespFocus: Learning Temporal Evidence for Weakly Supervised Respiratory Sound Classification",
    "authors": [
      "Yi Tian",
      "Xiaohuan Chen",
      "Yufei tang",
      "Xinyu Lin",
      "Hongliang Li",
      "Chengbin Hou",
      "Degen Huang",
      "Rongshan Yu"
    ],
    "abstract": "Respiratory auscultation provides a low-cost means of assessing pulmonary function, yet transient crackles and sustained wheezes can be difficult to recognize in noisy clinical recordings. Conventional deep learning classifiers often operate as black boxes, offering limited insight into the temporal acoustic evidence supporting their predictions. We present RespFocus, a weakly supervised framework that uses multiple instance learning (MIL) to learn inspectable temporal evidence from cycle-level labels and integrate it into classification. We also introduce PedResp2026, a multicenter pediatric respiratory sound cohort collected in routine clinical environments with adjudicated cycle-level annotations. In classification experiments, RespFocus achieves four-class Scores of 69.55\\% on public ICBHI 2017 and 72.91\\% on PedResp2026. Evidence diagnostics and matched temporal interventions support the functional contribution of the learned evidence to model predictions. Together, these findings highlight RespFocus's potential as a tool for automated respiratory sound diagnosis.",
    "published": "2026-10-11T15:37:56Z",
    "updated": "2026-10-11T15:37:56Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15702"
  },
  {
    "id": "2610.15699",
    "title": "TabMosaic: Unified In-Context Diffusion for Tabular Generative Tasks",
    "authors": [
      "Jayoung Kim",
      "Sanghyun Hong",
      "Noseong Park"
    ],
    "abstract": "Generative modeling for tabular data has advanced to the point where models can synthesize realistic records, recover missing values, and generate samples conditioned on class labels or observed attributes. Despite recent advances, existing approaches either require table-specific training or restrict in-context learning to single-cell prediction. In this work, we formulate these tabular generative tasks as a single problem: modeling the joint conditional distribution of an arbitrary set of target cells given the observed cells of an unseen table. To this end, we turn to diffusion, whose denoising objective is defined jointly over all target cells rather than one cell at a time. Under the pretraining distribution, this objective is minimized by the posterior predictive distribution over the target set. Building on this, we propose TabMosaic, a unified in-context diffusion model for generating mixed-type target cells in unseen, potentially incomplete tables without table-specific training. We further show that its pretraining objective bounds the conditional negative log-likelihood and the divergence from the posterior predictive for arbitrary target sets, extending the Bayesian account of in-context learning from a single-value prediction to joint multi-cell generation. Across 48 real-world tables, TabMosaic ranks first on all evaluated generative tasks against 20 baseline approaches",
    "published": "2026-10-11T15:35:39Z",
    "updated": "2026-10-11T15:35:39Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15699"
  },
  {
    "id": "2610.15691",
    "title": "FARL: A Fully Automated Pipeline of RL Interface and Solver Design",
    "authors": [
      "Tianyu Jin",
      "Liuyu Xiang",
      "Chaowen Yang",
      "Xingyang Chang",
      "Pei Pei Li",
      "Zhaofeng He"
    ],
    "abstract": "Existing reinforcement learning (RL) largely focuses on optimizing learning algorithms within a pre-defined task formulation, while applying RL to new tasks still relies heavily on human expertise to design the learning pipeline: what an agent observes, how it is rewarded, which algorithm it uses, and how training is configured. Automating these choices is challenging because they are tightly coupled. We introduce FARL (Fully Automated Reinforcement Learning), a framework that automates RL design by jointly searching observation and reward programs, learning algorithms, and training settings. FARL uses training statistics and observed behavior to diagnose failures, propose changes, and test whether they improve learning. Its search preserves diverse candidates and the controls needed for these tests, using a staged budget to screen designs before investing in longer training. Experimental memory records each finding together with its conditions, so an unsuccessful component can be reconsidered in a different combination. Across expert-withheld and expert-available settings, FARL outperforms the evaluated automated baselines on challenging navigation, locomotion, and manipulation tasks. On Adroit Hand Relocate, FARL achieves 97.1% success at 5M training steps per policy, compared with 0% for Eureka and LiMEN and 1.0% for native Proximal Policy Optimization (PPO) under the same policy training budget.",
    "published": "2026-10-11T15:22:18Z",
    "updated": "2026-10-11T15:22:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15691"
  },
  {
    "id": "2610.15685",
    "title": "Radioactive Feedback: Tracing Models Trained by Label-Only LLM Supervision",
    "authors": [
      "Yuejia Li",
      "JunHeng Li",
      "Hao Wu",
      "Ke He",
      "Mang Ye"
    ],
    "abstract": "Conventional distillation transfers capability through teacher-generated demonstrations. LLM-as-a-Judge knowledge distillation offers a distinct and increasingly practical alternative. In the label-only variant studied here, the student generates every response and improves from scalar scores alone. Prior work shows that this non-demonstrative feedback can improve student capability, but it creates a fundamentally different provenance problem. No teacher-generated answer enters the student's training set, so any evaluator-specific trace must pass through a low-bandwidth reward signal rather than copied text. Existing watermarks and distillation detectors do not cover this score-only channel. We introduce Radioactive Feedback, which encodes a registered pattern of behavioral preferences in the rewards themselves. The evaluator applies bounded pointwise adjustments to quality-qualified responses, allowing repeated optimization to transfer the pattern to a student trained by another party. Experiments on code and mathematics show that the registered preferences transfer through scores alone and across datasets, enabling black-box detection against a fixed reference pool.",
    "published": "2026-10-11T15:09:58Z",
    "updated": "2026-10-11T15:09:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15685"
  },
  {
    "id": "2610.15681",
    "title": "Rethinking Human Intent-to-CAD: Parametric CAD Model Generation via Cooperative Multi-Task Alignment and Spatial-Aware Reinforcement Learning",
    "authors": [
      "Qingwang Zhang",
      "Jiahao Li",
      "Xiangdong Zhou"
    ],
    "abstract": "Parametric Computer-Aided-Design (CAD) modeling from human intent remains challenging, particularly during the conceptual design stage, where design goals are expressed through incomplete and unstructured modalities (e.g., hand-drawn sketches and textual descriptions). In this work, we rethink the human intent-to-CAD pipeline and propose a unified method that directly maps multi-level human intents to executable codes, without assuming the prior existence of target CAD models. To support our study, we construct HiCAD, the first large-scale dataset aligning hand-drawn sketches, textual descriptions, and parametric CAD codes. Based on this, we introduce HiCAD, a two-stage framework comprising Cooperative Multi-Task Alignment to bridge the representational gap between heterogeneous inputs, and Spatial-Aware Reinforcement Learning to enforce geometric and topological consistency. Extensive experiments demonstrate that our method significantly outperforms existing baselines across multiple tasks, validating its effectiveness and robustness in transforming heterogeneous human intents into high-fidelity parametric CAD models. Our project page: https://zqwlearning.github.io/HiCAD.",
    "published": "2026-10-11T15:05:49Z",
    "updated": "2026-10-11T15:05:49Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15681"
  },
  {
    "id": "2610.15677",
    "title": "Knowledge Interaction in Hypernetwork-based Continual Learning: Conflict and Composition",
    "authors": [
      "Jiaqi Zheng",
      "Yi Hu",
      "Yadong Mu",
      "Muhan Zhang"
    ],
    "abstract": "Continual learning aims to adapt pretrained large language models (LLMs) to evolving data while preserving their pretrained capabilities. A central challenge is catastrophic forgetting: adaptation to new data can impair performance on previously learned knowledge. Since continual learning commonly changes model parameters, the model's predictions may draw on knowledge from the base model, the parameter update, and the input context. Understanding how these sources interact is essential: conflicts reveal whether new knowledge can override outdated knowledge, while multi-hop reasoning tests whether new knowledge can be composed with existing knowledge to support generalization. We study these interactions in a hypernetwork-based adaptation framework, where a shared network generates adapters from context, allowing a frozen base model to adapt without task-specific updates. We find that, under knowledge conflict, models preferentially follow the context, and their choices depend more on where knowledge is presented than on its content. We also show that context and adapter knowledge perturb the base model's representations along directions orthogonal to its clean hidden states, enabling us to derive steering vectors that control which source the model follows. In multi-hop reasoning, we find that models fail to reliably compose knowledge across the three sources, with the key breakdown arising from the interaction of the hypernetwork with both the base model and the context. Code and reproduction materials: https://github.com/missswiftie/Knowledge-Interaction-in-CL",
    "published": "2026-10-11T14:57:18Z",
    "updated": "2026-10-11T14:57:18Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.15677"
  },
  {
    "id": "2610.14547",
    "title": "A Self-Defining Operator for Distributed Applications",
    "authors": [
      "Shihang Li",
      "Thomas Anderson",
      "Ratul Mahajan",
      "Simon Peter",
      "Luke Zettlemoyer"
    ],
    "abstract": "To operate distributed applications with high availability, operators must rapidly diagnose and mitigate any incident. LLM-based agents can help, but unlike experienced human operators they do not improve as they handle more incidents. Each investigation starts from scratch, re-deriving likely causes and re-testing hypotheses even when a similar fault was resolved in the past. We present a self-defining operator (SDO) that improves with time by updating its operational behavior and memory. When SDO resolves an incident, it distills that experience into playbooks, which describe reusable diagnostic instructions for future incidents with similar faults, and detectors, scripts that take application telemetry as input and output relevant playbook(s). SDO continuously runs the detectors and invokes LLMs only when one fires, so its token cost scales with incident count rather than with operational time. Across 11 open-source microservice applications, SDO cuts resolution time by 52% on recurring faults while keeping per-incident cost low. SDO is open source at https://github.com/self-defining-systems/sdo.",
    "published": "2026-10-10T04:08:13Z",
    "updated": "2026-10-14T06:00:51Z",
    "categories": [
      "cs.DC",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14547"
  },
  {
    "id": "2610.14544",
    "title": "InfraWorld: Motion-Aware World Modeling for Roadside 4D Occupancy Forecasting",
    "authors": [
      "Songkai Wang",
      "Xiaokai Bai",
      "Lei Yang",
      "Hui-liang Shen"
    ],
    "abstract": "Roadside 4D occupancy forecasting predicts future semantic occupancy in a fixed infrastructure coordinate system. Roadside scenes are globally structured yet locally evolving, requiring comprehensive scene-level context while precisely modeling sparse localized motion. However, existing forecasting paradigms struggle to tackle both requirements. To address this limitation, we propose InfraWorld, a world model formulating roadside occupancy forecasting as selective state evolution. InfraWorld maintains a dense BEV state for the complete scene and persistent motion queries for moving regions, assigning complementary states to global context and local dynamics. Specifically, we propose Dynamic Query Initiation (DQI) to initialize queries in regions supported by motion in the observed history. During rollout, the dense state is updated through Long--Short Temporal Fusion (LST), which combines short-term adjacent-frame continuity with long-term motion trends to preserve stable context while capturing scene evolution. Motion-Aware Query Injection (MAQI) then refines the queries and injects confidence-weighted query information into corresponding BEV tokens, enabling targeted dynamic updates without perturbing global context. Together, InfraWorld concentrates predictive capacity on evolving traffic regions. Extensive experiments on the InfraOcc and Occ3D--nus datasets demonstrate that InfraWorld achieves state-of-the-art performance for roadside 4D occupancy forecasting while retaining its effectiveness under ego-centric settings. Code will be released.",
    "published": "2026-10-10T04:00:44Z",
    "updated": "2026-10-10T04:00:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14544"
  },
  {
    "id": "2610.14542",
    "title": "Are Multimodal Benchmarks Really Useful? Item-Level Multimodal Benchmark Diagnosis via Structure-Response Co-Calibration",
    "authors": [
      "Shiqi Zhang",
      "Weixin Zeng",
      "Ziheng Zhang",
      "Jiuyang Tang",
      "Xiang Zhao"
    ],
    "abstract": "Multimodal benchmarks are central to evaluating whether models can reason over information from multiple modalities. However, existing literature has revealed that some benchmarks may contain shortcut items that can be answered from a single modality or from answer-option regularities alone, thus failing to reflect models' true cross-modal inference ability. Existing methods for assessing benchmarks typically rely either on intrinsic item structure or extrinsic model response behavior, which are not adequate for a comprehensive diagnosis. To fill in this gap, we propose SRCoD, a structure-response co-calibrated diagnosis framework for item-level diagnosis of modality dependence in multimodal benchmarks. SRCoD estimates sample-wise multimodal information structure from benchmark content and target answers, and uses this signal as a soft structural anchor for modality-conditioned item response modeling. The learned model produces a calibrated item-level diagnostic profile that reflects how strongly an item depends on different forms of modality evidence, enabling fine-grained benchmark analysis beyond aggregate accuracy. SRCoD also provides interpretable attribution of the diagnosis results. Extensive experiments under two complementary protocols, i.e., benchmark-refinement oriented validation and human-labeled item validation, demonstrate that SRCoD outperforms state-of-the-art benchmark diagnosis methods.",
    "published": "2026-10-10T03:57:33Z",
    "updated": "2026-10-10T03:57:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14542"
  },
  {
    "id": "2610.14541",
    "title": "GG-Nav: Goal-oriented Grounding Chain-of-Thought Elicits Reasoning in Navigation Foundation Models",
    "authors": [
      "Shaohao Zhu",
      "Wensi Huang",
      "Siqi Zhang",
      "Yuqiang Yang",
      "Meng Wei",
      "Chenyang Wan",
      "Tianle Liu",
      "Tai Wang",
      "Jinming Xu"
    ],
    "abstract": "Emerging strong Vision-Language Models (VLMs) have advanced navigation foundation models. However, these models still have unsatisfactory performance on goal-oriented navigation settings. In this paper, we first conduct a motivating study revealing that the key issue lies in the insufficient utilization of streaming observations and imprecise target localization. To tackle these challenges, we propose GG-Nav, a simple yet effective navigation framework that learns a structured chain-of-thought (CoT) mechanism via supervised fine-tuning to explicitly localize goal-relevant instances, accumulate grounding evidence, and support more reliable decision-making. Specifically, the structured CoT is designed with two key stages: (i) Observation-to-Evidence, which reasons over all intermediate frames between adjacent decision steps to retain useful goal-related evidence; and (ii) Evidence-to-Decision, which integrates the current observation with accumulated evidence to ground the target and support the generation of navigation actions or clarification questions. Extensive experiments show that GG-Nav outperforms the state-of-the-art methods in terms of success rates on the HM3D ObjectNav, VL-LN, and CoIN benchmarks by 3.1%, 16.6%, and 5.3%, respectively. Ablation studies further show that accumulating evidence from intermediate observations reduces evidence-missing failures by 11.6%, while explicit grounding reduces stopping errors by 49.4%. We also deploy GG-Nav on a Unitree Go2 robot, demonstrating its zero-shot generalization capability in unseen real-world environments.",
    "published": "2026-10-10T03:54:19Z",
    "updated": "2026-10-10T03:54:19Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14541"
  },
  {
    "id": "2610.14539",
    "title": "FDE-Bench: Evaluating End-to-End Delivery from Underspecified Real-World Business Requests",
    "authors": [
      "Huaiming Li",
      "Can Huang",
      "Chufan Wu",
      "Danyu Liu",
      "Xiaomin Yuan",
      "Qinze Li",
      "Yui Lo",
      "Wenhui Bai",
      "Qianlong Wang",
      "Zengle Ge",
      "Xiyu Yan",
      "Yuheng Cheng",
      "Jinhui Ren",
      "Guokai Chen",
      "Jiaqun Liu",
      "Haoran Li",
      "Qianhui Liu",
      "Annan Li",
      "Jianmin Wu",
      "Dawei Yin",
      "Dou Shen"
    ],
    "abstract": "Real-world business requests often leave key requirements unstated because frontline practitioners struggle to articulate rules they know from experience. Forward-deployed engineers (FDEs) must elicit these requirements through dialogue and iteratively optimize solutions until they meet customer acceptance criteria. Existing optimization benchmarks typically start from explicit objectives, while clarification benchmarks often introduce information gaps into existing tasks. We introduce FDE-Bench, the first benchmark built from real customer projects to evaluate agents on end-to-end delivery tasks that require interactive requirement clarification and iterative optimization. Its 49 cases span combinatorial optimization and machine learning. Clarification targets are distilled from discussions between frontline practitioners and FDEs. Agents elicit missing requirements from a simulated customer, and case-specific evaluators assess final artifacts against acceptance criteria using customer-accepted FDE solutions as quality references. Across 18 agent configurations, the highest mean delivery score is only 0.5510, compared with an FDE reference of 1.0. The highest delivery success rate (DSR), defined as the fraction of planned runs reaching this reference, is only 6.12%. These results show that reliable FDE-level end-to-end delivery remains out of reach for the evaluated agents on underspecified real-world business tasks. The benchmark project page is available at https://baidubce.github.io/FM-Agent/FDE-Bench/.",
    "published": "2026-10-10T03:53:42Z",
    "updated": "2026-10-10T03:53:42Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.14539"
  },
  {
    "id": "2610.14530",
    "title": "Who to Trust in Multi-Robot Systems: Joint Robot and Object Hypothesis Trust Inference via Neural-Symbolic Cross-Validation",
    "authors": [
      "Ruiyang Wang",
      "Hao-Lun Hsu",
      "Haocheng Meng",
      "Songqiao Xie",
      "Miroslav Pajic"
    ],
    "abstract": "Multi-robot systems (MRS) offer significant advantages over single-robot platforms by enabling information sharing and coordination for different tasks in complex environments. However, reliable cooperation critically depends on inferring trust over both information sources and their reported hypotheses, particularly under partial observability and potential adversarial interference. Existing approaches frequently depend on pre-established trust relationships or side-channel information, which may not be available or reliable in realistic MRS deployments. This work introduces NeST-Bayes, a neural-symbolic framework that jointly infers robot and hypothesis trust using only inter-robot observation consistency, without requiring preassigned robot trust, reputation information, or side-channel identity signals. NeST-Bayes infers instantaneous trust evidence scores for robots and object hypotheses by reasoning over ego-centric relational graphs constructed from cross-robot observation consistency. These evidence scores are accumulated over time through Bayesian updates of Beta-distributed trust beliefs to maintain temporally consistent trust estimates. Extensive evaluations show that NeST-Bayes achieves the highest mean object precision and robot recall across all benchmark settings, and the highest robot precision and object recall in most settings, compared to trust-based methods. Under aggressive optimized attacks, it achieves 98.8\\% robot precision with 93.8\\% recall and 98.3\\% object precision with 95.4\\% recall. In an occlusion-rich Webots warehouse, it maintains 92.5\\% robot precision with 92.0\\% recall and 97.3\\% object precision with 85.0\\% recall. These results demonstrate joint improvements in the reliability and coverage of retained information.",
    "published": "2026-10-10T03:41:27Z",
    "updated": "2026-10-10T03:41:27Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14530"
  },
  {
    "id": "2610.14525",
    "title": "Energy Ring: Stabilizing Feature Energy for Reliable Test-Time Discovery",
    "authors": [
      "Tianle Liu",
      "Fan Lyu",
      "Tingliang Feng",
      "Chenggong Ni",
      "Tianqi Wang",
      "Zhang Zhang",
      "Fuyuan Hu",
      "Rui Yao",
      "Tao Zhou"
    ],
    "abstract": "Test-Time Discovery (TTD) aims to recognize known classes and detect novel ones while the model is already deployed, operating directly on a continual unlabeled test-time stream. Existing TTD methods are overly conservative, making known and unknown features collapse together and difficult to separate during test-time adaptation. In this paper, we revisit TTD from an energy perspective and find that the natural energy gap between known and unknown classes is unstable and easily collapses. We therefore propose Energy Ring to stabilize this gap by anchoring the two types of classes on separate energy rings. A lightweight adapter enlarges the norm-based gap while preserving known-class directions, and a perturbation consistency module forms compact clusters for unknown classes. During testing, energy-guided confidence weighting improves prediction, and a stability-based rectification mechanism corrects unreliable updates. Experimental results show that Energy Ring significantly improves TTD performance against existing TTD methods.",
    "published": "2026-10-10T03:36:12Z",
    "updated": "2026-10-10T03:36:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14525"
  },
  {
    "id": "2610.14523",
    "title": "ScienceBuddy-PV: A Verifier-Governed Recursive Improvement Protocol for Panvascular Intervention Research",
    "authors": [
      "Lingsen You",
      "Yujun Guo",
      "Xinyu Zhong",
      "Zijie Feng",
      "Wentong Wang",
      "Li Shen",
      "Junbo Ge"
    ],
    "abstract": "ScienceBuddy-PV adapts the ScienceBuddy recursive-in-recursive design to panvascular intervention research through a structured evidence ledger, device-vessel ontology, abstention contract and retained failure bank. Recursive harness optimization and outer-loop model learning, including reinforcement learning, are specified but not executed. We audit a fixed component, rather than the complete agent system, using separate ARCADE syntax and stenosis tasks (1,000 training, 200 validation and 300 test images per task). A shared task-masked convolutional model was trained once per representation setting; its parameters and the heuristic support gate were then held fixed, with the stenosis threshold selected on validation data. On the locked test sets, syntax Dice was 0.475 (95% CI 0.459-0.490) and stenosis Dice was 0.231 (95% CI 0.214-0.249). Stenosis pixel AUROC was 0.957 and AUPRC was 0.180 at prevalence 0.00975. The gate accepted 76.7% of stenosis-frame outputs versus 100% for a score-only comparator. In a constructed mask audit, it accepted 44.3% of reference candidates and rejected 55.7%, exposing the cost of abstention. Acceptance does not establish correctness or clinical safety. This public-data component audit makes support and abstention measurable and provides a reproducible protocol for future collaborative agent studies. It does not demonstrate recursive improvement, patient-level validity or clinical device recommendations.",
    "published": "2026-10-10T03:35:28Z",
    "updated": "2026-10-10T03:35:28Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14523"
  },
  {
    "id": "2610.14517",
    "title": "We Have Been Interpreting Diffusion Transformer Backbone Behaviors Wrong",
    "authors": [
      "Benyuan Meng",
      "Longtao Huang",
      "Yang Liu",
      "Liang Lin"
    ],
    "abstract": "During a network forward call, diffusion backbones naturally produce many intermediate activations. If we evaluate each activation against an identical downstream benchmarking protocol, we can plot an inverted-U-shaped curve as the depth profile: the activation's performance goes up first and then down as we go into deeper layers. This is common knowledge in the diffusion model community, which inspires many applications including the widely-adopted REPA. However, the common interpretation of this depth profile may be inaccurate and incomplete: (i) The cause of this curve has long been treated as signal granularity changing from coarse to fine, but there has been little evidence in DiT backbones. (ii) The community has been mainly studying this phenomenon in a static way, without investigating how it changes across different training setups. In this work, we show a different mechanism picture for the profile, where the prediction target (e.g., $ε$, $u$, $x_0$) sits at the center. The semantically meaningful signal is only an intermediate by-product for predicting the target, while the prediction target is the real goal for the backbone. Furthermore, the choice of prediction targets as part of the training setup can predictably affect the curve's shape. With this updated interpretation, many applications of this depth profile can be better grounded and predicted. As an example, we show how to predict the near-optimal placement of REPA based on the prediction target of the training setup. The code is at https://github.com/Darkbblue/dit-compare.",
    "published": "2026-10-10T03:26:50Z",
    "updated": "2026-10-10T03:26:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14517"
  },
  {
    "id": "2610.14514",
    "title": "Compositional Concepts Erasing: Disentangling Object-Style via Domain Manifold Unlearning",
    "authors": [
      "Yang Xiao",
      "Kaiyuan Deng",
      "Gen Li",
      "Zinan Ling",
      "Zhiwen Fan",
      "Xiaolong Ma",
      "Bo Hui"
    ],
    "abstract": "Diffusion models pose significant risks regarding the generation of illicit content and copyright violations. This has catalyzed the development of machine unlearning to erase harmful concepts or copyrighted styles from a model's generative repertoire without compromising its general performance. However, previous unlearning approaches on diffusion models have largely focused on either object-level or style-level removal and failed to address the challenge of object-style combination unlearning. At the same time, multiple unlearning requests often lead to catastrophic forgetting. To address these challenges, we propose Domain Manifold Unlearning (DMU), which uses an EMA-updated feature proxy extracted from intermediate diffusion features to represent the retained target-object direction. As a lightweight estimating representation of an object, DMU enables selective unlearning of domain-specific components in a specific object while preserving other semantic representations, thereby significantly enhancing robustness in multiple combination unlearning scenarios. Extensive experiments show that DMU significantly mitigates catastrophic forgetting, outperforming state-of-the-art methods of batch unlearning and sequential unlearning.",
    "published": "2026-10-10T03:22:31Z",
    "updated": "2026-10-10T03:22:31Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.14514"
  },
  {
    "id": "2610.14513",
    "title": "TartanMatch: Towards Universal Dense Correspondence Across Modalities",
    "authors": [
      "Hyeokjoon Kwon",
      "Jiting Cai",
      "Ruogu Li",
      "Kritan Bhandari",
      "Geethika Hemkumar",
      "Parv Maheshwari",
      "Yuheng Qiu",
      "Yuchen Zhang",
      "Sebastian Scherer",
      "Wenshan Wang"
    ],
    "abstract": "Robotic platforms combine multi-modal sensors to operate across diverse conditions, but most dense correspondence methods are limited to RGB-RGB or a small set of modality pairs. Training a model for each modality pair scales poorly with the number of sensors and forgoes potential positive transfer across modality pairs. We introduce TartanMatch, a unified model for dense correspondence across all 25 ordered pairs among RGB, event, thermal, depth, and projected LiDAR. TartanMatch adapts an RGB-pretrained correspondence model to all modality pairs within one shared network using lightweight modality adaptation and a mixture of real and synthetic data. On zero-shot real-world benchmarks, TartanMatch reduces Endpoint Error (EPE) over the strongest baselines by 61.9% for cross-modal matching and 49.6% for same-modal matching. We further show that joint training across all modality pairs improves average matching accuracy over pair-specific training, especially on challenging cross-modal pairs. These results demonstrate that a single model achieves broad multi-modal coverage and state-of-the-art matching accuracy.",
    "published": "2026-10-10T03:19:32Z",
    "updated": "2026-10-10T03:19:32Z",
    "categories": [
      "cs.CV",
      "cs.LG",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.14513"
  },
  {
    "id": "2610.14512",
    "title": "Spatiotemporal Recognition of Abdominal Wall Layers During Optical Trocar Entry",
    "authors": [
      "Shreeram Athreya",
      "Andrew Melehy",
      "Carter Prentice",
      "Michael Robinson",
      "Corey Arnold",
      "James Wu",
      "William Speier"
    ],
    "abstract": "Objective. To evaluate whether spatial context and temporal modeling improve tissue recognition during optical trocar entry, where multiple abdominal-wall tissues may be visible simultaneously. Methods. We retrospectively analyzed 71 recordings with 1,516 annotated keyframes and 29,151 clinician-annotated sectors. Each frame was divided into 28 polar-grid sectors assigned to nine tissue classes. Color, neighboring-sector, and positional features were used by a gradient-boosted emission classifier. The full pipeline added learned temporal smoothing, spatial regularization, an anatomically ordered hidden Markov model, and posterior blending. Five-fold cross-validation was grouped by recording, with cross-fitting to prevent within-recording leakage. Primary evaluation used clinician-derived targets; ablations assessed classification, probability quality, spatial consistency, and peritoneum-or-deeper onset timing. Results. The complete pipeline achieved accuracy 0.646, macro-F1 0.507, and macro-AUROC 0.882, versus 0.600, 0.440, and 0.861 for emissions alone. Macro-F1 improved by 0.066 across all five folds. Label changes decreased from 66.2 to 19.5 per sector-minute, and median onset error decreased from 15.58 to 2.45 seconds. Frames with a tissue-depth-code span of at least three decreased from 53% to 26%, versus 22% for clinician annotations. Performance remained limited for preperitoneal fat and bowel, and the full model retained a 44% premature-onset proportion. Conclusions. Combining appearance, spatial context, and temporal constraints improved retrospective tissue recognition and onset localization. Tissue-specific limitations, residual timing errors, and reliance on future observations warrant external validation and prospective evaluation of causal models before clinical use.",
    "published": "2026-10-10T03:19:27Z",
    "updated": "2026-10-10T03:19:27Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.14512"
  },
  {
    "id": "2610.12574",
    "title": "Scaling Multi-Teacher Distillation for Digital Pathology",
    "authors": [
      "Sofiène Boutaj",
      "Pierre Marza",
      "Varun Belagali",
      "Dimitris Samaras",
      "Maria Vakalopoulou",
      "Stergios Christodoulidis"
    ],
    "abstract": "Multi-teacher distillation allows transferring knowledge from multiple \"teacher\" networks to a single \"student\" network. This method is promising in fields such as digital pathology, where many powerful foundation models were proposed recently. However, as we show in this paper, the standard multi-teacher distillation approach reacts poorly to an increase in the number of teachers used to train a student encoder. We demonstrate that learning teacher-specific representations is a key to scaling in MTD. Importantly, different design choices, such as learnable teacher tokens, a tailored attention scheme, additional mixture-of-experts layers and a contrastive loss, are proposed to better learn such teacher-specific representations. We show that our method better scales with respect to the number of considered teachers, allowing us to train compact student encoders, up to 10x more efficient than larger teacher foundation models, while matching their performance and even outperforming them on a large set of tile-level and slide-level tasks. We conduct a thorough empirical validation, evaluating more than 10 foundation models on 39 tasks spanning tile and slide levels. As a result, we release a new collection of strong and efficient foundation models, named OMNI, trained from the knowledge of 10 state-of-the-art foundation models. We finally conduct an analysis of the learned teacher-specific representations, highlighting their complementarity and explaining why they can be easily aggregated at downstream time.",
    "published": "2026-10-08T18:02:09Z",
    "updated": "2026-10-08T18:02:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12574"
  },
  {
    "id": "2610.12568",
    "title": "MIRAGE: Metric Inference and Reliability-Aware Gaussian Estimation from Feed-Forward Vision",
    "authors": [
      "Xinzhe Wang",
      "Changjian Jiang",
      "Kaiwen Song",
      "Xudong Li",
      "Kerui Ren",
      "Ran Yi",
      "Lizhuang Ma",
      "Chunhua Shen",
      "Linning Xu",
      "Tao Lu",
      "Mulin Yu"
    ],
    "abstract": "Feed-forward 3D priors enable high-quality reconstruction from image streams but often lack reliable metric scale and suffer from long-term trajectory drift. In contrast, LiDAR--inertial estimation provides metrically accurate motion but lacks the image-space consistency needed for high-fidelity reconstruction. We propose $MIRAGE$, which anchors feed-forward visual geometry to LiDAR--IMU metric motion and regulates online pose corrections according to correspondence support and cross-modal agreement, jointly enabling accurate metric pose estimation and high-fidelity Gaussian reconstruction. Experiments on Oxford Spires, M2DGR and INS show that MIRAGE achieves accurate metric trajectory estimation, outperforming COLMAP, a widely used but computationally expensive reference for vision-only benchmarks. Motivated by the scarcity of long-horizon monocular benchmarks for large-scale indoor reconstruction, we further build a multimodal data-collection platform and use MIRAGE to establish accurate 6-DoF reference trajectories for a new vision-only benchmark. We benchmark recent monocular large-scale reconstruction methods on this dataset, providing a systematic evaluation of their performance in long-horizon indoor scenes.",
    "published": "2026-10-08T18:00:56Z",
    "updated": "2026-10-08T18:00:56Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12568"
  },
  {
    "id": "2610.12567",
    "title": "CASTER: Formalizing Zero-Shot Manipulation from Synthetic Videos as Constrained Optimization",
    "authors": [
      "Yinlong Dai",
      "Homanga Bharadhwaj",
      "Dylan P. Losey"
    ],
    "abstract": "Prior research on learning from humans often requires real human demonstrations. But advances in video generation models offer a new paradigm: we can now prompt these generators to make synthetic videos of the task. On the plus side, these synthetic videos take place in the robot's current environment, and do not require actual human teaching. However, while the generated videos appear to show plausible motions, they lack both physical consistency and robot grounding, and thus the robot cannot directly roll out the trajectory shown by the video. In this paper we seek to formalize the process of going from synthetic video generation to real-world robot trajectories for zero-shot manipulation tasks. We recognize that this problem is an instance of constrained optimization. The object trajectories extracted from the synthetic video provide an initial guess at the correct motion, and the robot must refine these trajectories (for instance, within a digital twin) while enforcing physical feasibility and semantic consistency. Our optimization-based formalism provides insights into the video generation properties necessary for success. Specifically, we show that the video generation must probabilistically seed the search within a semantic basin of attraction where the trajectory can be locally modified without losing its task alignment. Our analysis further reveals that state-of-the-art approaches can be viewed as instances of our unified formalism with key simplifications. In our experiments we remove these simplifications to more closely match the underlying optimization, leading to more robust zero-shot trajectories from synthetic videos and improving average task success by 34.1% compared to the best-performing baseline. See videos at our project website: https://collab.me.vt.edu/CASTER",
    "published": "2026-10-08T18:00:55Z",
    "updated": "2026-10-08T18:00:55Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12567"
  },
  {
    "id": "2610.12549",
    "title": "Fly-by-Code: Embodied Coding Agents for Aerial Manipulation with Active Visual and Physical Feedback",
    "authors": [
      "Jaewoo Lee",
      "Jeongyeon Seo",
      "Sihyun Cho",
      "Gyeongrak Choe",
      "Yutong Wang",
      "Bavin Saravanan",
      "Jia-Bin Huang",
      "Furong Huang",
      "Sebastian Scherer",
      "Guanya Shi",
      "H. Jin Kim",
      "Seungjae Lee",
      "Dongjae Lee"
    ],
    "abstract": "Embodied coding agents construct robot policies from natural-language instructions by generating executable programs and refining them from execution feedback. This refinement assumes that execution feedback reveals whether the task succeeded and, after a failure, provides sufficient evidence to guide program revision. Aerial manipulation violates this assumption in two ways. Payload constraints restrict onboard camera coverage and leave task-critical outcomes outside the robot's view (partial observability), while strong dynamic coupling and limited control margins make physical interactions fragile (limited interaction robustness) and leave failure causes unresolved. Re-examining the same feedback cannot recover observations that were never collected or separate failure causes that the available evidence does not distinguish. To acquire this missing evidence, we introduce Active Feedback (AF), an active \"View and Probe\" framework. When execution feedback leaves unresolved questions, the agent synthesizes a separate diagnostic program that runs in simulation to inspect unseen outcomes from informative viewpoints (View) or test hypotheses about failure causes through targeted physical interactions (Probe). Across six simulated aerial manipulation tasks with 60 trials per condition, AF reduces false completion declarations from 25 to 5 and raises final task success from 31.7% to 75% compared with terminal feedback under the same coding-agent configuration and task-execution limit. Using shared robot APIs, task programs refined with AF in simulation run on a physical aerial manipulator without task-program source-code modification and complete multi-stage manipulation tasks in the real world. These results show that executable diagnosis fills gaps in execution feedback for embodied coding agents, improving both completion assessment and program refinement in aerial manipulation.",
    "published": "2026-10-08T18:00:00Z",
    "updated": "2026-10-08T18:00:00Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12549"
  },
  {
    "id": "2610.12470",
    "title": "Dex-One2Many: Learning Dexterous Manipulation from a Single Human Demonstration",
    "authors": [
      "Jusuk Lee",
      "Sungha Kim",
      "Yeonsoo Park",
      "Jonguk Cheon",
      "Yoonkyo Jung",
      "Yongjun You",
      "H. Jin Kim",
      "Jia-Bin Huang",
      "Furong Huang",
      "Youngseok Jang",
      "Seungjae Lee"
    ],
    "abstract": "While learning dexterous manipulation from a single human video offers a promising alternative to costly robot demonstrations, many recent methods predominantly imitate demonstrated motions. Such strict motion matching often limits generalization to initial object poses, goal poses, and grasps not shown in the video. Alternatively, discovering a policy via reinforcement learning (RL) allows for broad generalization, but without prior guidance, it struggles with high-dimensional exploration in complex, multi-stage tasks. To address these coupled generalization and exploration challenges, we present Dex-One2Many, a real-to-sim-to-real framework that learns a generalizable dexterous manipulation policy from a single human video. Our key insight is to abstract the video into sequential scene graphs that guide RL, enabling efficient exploration while preserving broad generalizability. The graphs serve as generative constraints for sampling diverse reset states and provide dense rewards for each stage. Because the graphs constrain relations rather than exact poses, these reset states cover object poses and grasps beyond the video, while initializing each stage from them with dense rewards keeps exploration short and guided. Trained entirely in simulation, Dex-One2Many transfers zero-shot to a real multi-fingered hand. Across five tool-use and manipulation tasks, Dex-One2Many exceeds baselines by 6.5% in seen configurations, while its robust generalization widens this gap to 71% in unseen scenarios.",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12470"
  },
  {
    "id": "2610.12469",
    "title": "Rubric-CEPR: Self-Evolving Image Editing via Reward-Verified Self-Distillation",
    "authors": [
      "Ritesh Thawkar",
      "Shubham Patle",
      "Shravan Venkatraman",
      "Rao Muhammad Anwer"
    ],
    "abstract": "Instruction-guided image editors have become highly capable, yet improving them further still depends on human-edited training pairs or external reward models. Such supervision is costly to obtain and can reward plausible failures: a realistic output may leave the requested change undone or alter content that should be preserved. In this work, we strive to improve a pretrained image editor using only its own generations, without human-edited targets or an external training-time reward model. To this end, we propose a self-evolving framework, named Rubric-CEPR, that verifies the editor's own samples with its internal representations through a rubric-augmented Contrastive Edit-Preservation Reward (CEPR). A Planner proposes structured edit instructions from unlabeled images, the Editor samples multiple candidate edits, and a frozen Critic scores each candidate with decomposed rubric checks for edit realization, removal of the old state, and content preservation, using features already exposed by the editor. Non-compensatory gates reject infeasible candidates, and the best verified candidate is distilled into the editor through lightweight adapter training. On Qwen-Image-Edit, Rubric-CEPR improves ImgEdit from 4.36 to 4.60 (+5.5%), with a +24.9% gain on object isolation, and transfers to GEdit-Bench and Complex-Edit. The same procedure also improves Step1X-Edit by +7.8% on ImgEdit. We hope our approach will serve as a solid baseline for image editors that improve themselves from their own verified samples. Our code is publicly available at $\\href{https://riteshthawkar.github.io/Rubric-CEPR/}{\\text{this URL}}$",
    "published": "2026-10-08T17:59:58Z",
    "updated": "2026-10-08T17:59:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12469"
  },
  {
    "id": "2610.12545",
    "title": "AutoIndexer: Flexible-Order Decoding by Training Causal Models on Chains of Edits",
    "authors": [
      "Shu Ishida",
      "Aliasghar Khani",
      "Tianyu Zhang",
      "The Cong Luong",
      "James Seale Smith",
      "Adam Gaier"
    ],
    "abstract": "Autoregressive decoding is less suited to non-causally ordered data, e.g., cross-references or future dependencies, since their outputs cannot be revised post hoc, unlike iterative human reasoning. Diffusion LLMs partially mitigate this limitation but still cannot flexibly insert or remove arbitrary numbers of tokens from a pre-generated context. We design AutoIndexer as a generative model with a novel training and decoding mechanism that simulates a Chain of Edits, allowing the model to flexibly modify its prior outputs in hindsight via token insertions, substitutions, and deletions. The model learns to predict marker tokens for opening and closing edits, simultaneously moving a cursor to positions in the existing token sequence, analogous to a text editor. Training sequences are obtained by perturbing ground-truth labels with inverse chained edit operations, and the model learns to edit by undoing those inverses. The perturbation training allows AutoIndexer to be robust to erroneous context and adaptable to editing tasks such as code correction. We demonstrate that our method exhibits post-generation context-editing capabilities that most autoregressive and diffusion models lack without compromising performance on standard LLM benchmarks. The code is available at https://github.com/AutodeskAILab/autoindexer.",
    "published": "2026-10-08T17:59:52Z",
    "updated": "2026-10-08T17:59:52Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.12545"
  },
  {
    "id": "2610.12468",
    "title": "DreamTrue: Action-Faithful Robot World Model with Counterfactual Post-Training",
    "authors": [
      "Junyan Li",
      "Ruizhi Li",
      "Yu Liu",
      "Xiangshuo Liu",
      "Mingchao Sun",
      "Hongyu Pan",
      "Mu Xu",
      "Lue Fan",
      "Zhaoxiang Zhang"
    ],
    "abstract": "We present DreamTrue, a multi-view, cross-embodiment robot world model for action-faithful and physically plausible video prediction. Training such a model on existing robot datasets faces two obstacles: imprecise calibration can impair action following, while limited coverage of unsuccessful interactions can bias predictions toward successful outcomes. To improve action following across embodiments, we render action trajectories into image-space conditions and introduce offline geometric calibration to align these conditions with the target videos. To broaden interaction coverage, we introduce counterfactual post-training, modifying recorded action trajectories and generating future videos under a wider range of actions and contact configurations. To provide feedback on these predictions without paired ground-truth futures, we construct a human-annotated video dataset covering robot, object, and interaction defects and use it to train an embodied video reward model. Its scores guide reinforcement-learning post-training toward more physically plausible interaction outcomes. On AgiBot, DreamTrue attains state-of-the-art action following, while reducing the human-assessed interaction defect rate from from 48.12% to 6.25%. Notably, our model ranks first in the world model track of the AgiBot World Challenge 2026. The project page can be found at https://brave-eai.github.io/DreamTrue.",
    "published": "2026-10-08T17:59:51Z",
    "updated": "2026-10-08T17:59:51Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12468"
  },
  {
    "id": "2610.12466",
    "title": "On the estimation and validity of AI time horizons---a statistical look at the METR plot",
    "authors": [
      "Drew T. Nguyen",
      "William Fithian"
    ],
    "abstract": "METR's 50\\% time horizon measures the human completion time of software tasks that an AI solves with 50\\% probability, allowing AI capabilities to be expressed in interpretable units. On 228 tasks and 26 AIs, we recompute the time horizons using splines and item-response theory to relax the assumption that the AI difficulty of a task depends linearly on the log of human time. Our fitted spline can be interpreted as a function that \\emph{converts} human time to AI difficulty; it is nearly flat in a region from 2--30 min but close to linear elsewhere. Hence, a time-horizon jump from 3 min to 30 min is much easier than one from 30 min to 5 hours despite the same multiplier of $10 \\times$. Overall, we contribute time-horizon point estimates that perform better under a cross-validated suite of proper scoring rules, as well as diagnostic plots for assessing time horizons' construct validity. We suggest that time horizons be interpreted together with the diagnostic plots, especially as new time-horizon-based benchmarks are proposed or existing ones grow to include longer tasks.",
    "published": "2026-10-08T17:59:50Z",
    "updated": "2026-10-08T17:59:50Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.12466"
  },
  {
    "id": "2610.12463",
    "title": "From Reactive Containment to Proactive Assurance: Lessons from OpenAI, Anthropic, and Google Agent Security Incidents",
    "authors": [
      "Abbas Raftari"
    ],
    "abstract": "In 2026, cybersecurity evaluations involving OpenAI, Anthropic, and Google agents reached real systems outside their authorized test scope. The paths were different. OpenAI agents exploited research infrastructure, coordinated across runs, and compromised parts of Hugging Face's production environment. Anthropic reported cases in which a misconfigured third-party environment exposed real systems to agents pursuing simulated cyber tasks. In a separately reported evaluation, Google's Gemini accessed three real organizations through an unintended internet route; Google stated that the model stopped in all three instances. Taken together, the cases show why an evaluation cannot rely on an assumed boundary. That boundary must be verified while the agent is operating. This comparative instrumental case study develops a Proactive Agent Security Assurance Cycle (PASAC) and a five-layer Boundary Assurance Stack. The framework combines risk-tiered task design, executable scope contracts, pre-run validation, least-capability access, independent egress enforcement, credential restrictions, cross-run monitoring, automatic stop conditions, and evidence-based reauthorization. A leading-indicator model, nine design propositions, and seven falsifiable hypotheses turn these lessons into a testable research program. Because the public Gemini record is limited to attributed statements and journalism, its detailed causal mechanism remains provisional. The central conclusion is straightforward: proactive agent security requires continuous assurance across the full execution system, not confidence in any single sandbox or safeguard.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.12463"
  },
  {
    "id": "2610.12464",
    "title": "What 30,000 Hours of Ego-centric Video Does Not Teach",
    "authors": [
      "Jiahua Dong",
      "Anurag Bagchi",
      "Yash Jangir",
      "Muhammad Zubair Irshad",
      "Sergey Zakharov",
      "Martial Hebert",
      "Homanga Bharadhwaj",
      "Yu-Xiong Wang",
      "Vitor Campagnolo Guizilini",
      "Pavel Tokmakov"
    ],
    "abstract": "World models offer a promising alternative to physics-based simulators, yet remain far from practical deployment. We ask how far scaling ego-centric human video takes them, using a dataset of 30,000 hours spanning over 1,000 scene types and 14,000 contributors. Rather than relying on opaque downstream metrics, we directly evaluate agent and object-interaction fidelity on a challenging out-of-distribution benchmark. Increasing training data by 100x improves both, but unevenly: the agent is modeled well, while object fidelity remains far lower and improves slowly. We show that the agent gains need not come from data, and a careful visual conditioning design saturates fidelity with a fraction of it, which lets us measure object fidelity on its own and discover its saturation point. We then introduce a supervision scheme that shifts capacity from scene appearance toward object dynamics, improving object fidelity though a substantial gap remains. Finally, our conclusions transfer to downstream humanoid modeling. Overall, our results suggest that scaling ego-centric data brings agent modeling close to its limit while leaving its effects on the world far behind, and that closing this gap will depend on how models are trained, not only on how much data they see.",
    "published": "2026-10-08T17:59:49Z",
    "updated": "2026-10-08T17:59:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.12464"
  },
  {
    "id": "2610.12461",
    "title": "OuroWorld: Bringing Any 3D World Alive as Diverse, Endlessly Looping 3D Cinemagraphs",
    "authors": [
      "You-Zhe Xie",
      "Ting-Wei Chou",
      "Yu-Hsuan Li",
      "Kaipeng Zhang",
      "Zhixiang Wang",
      "Yu-Lun Liu"
    ],
    "abstract": "Recent 3D world models generate photorealistic, explorable scenes that remain frozen in time. OuroWorld is a mask-free framework that turns any static 3D Gaussian Splatting scene into a 3D cinemagraph: a dynamic scene with vivid, diverse motion looping seamlessly from any viewpoint. A vision-language model infers plausible dynamics and guides a video model to synthesize a reference video, which we lift and complete into multi-view videos. To learn from this imperfect supervision, we propose Inconsistency-Robust Periodic 4DGS: a Fourier-series deformation field guarantees looping by construction, while a Grounded Drift Field anchored at the reference view absorbs cross-view inconsistency. Unlike prior Eulerian methods limited to fluid-like motion, we capture general deformation, object motion, and illumination change. We introduce a ground-truth-free evaluation covering vividness, naturalness, loop seam coherence, and scene quality. On 39 reconstructed and generated scenes, OuroWorld outperforms all baselines and wins 70.8%-99.0% of user-study comparisons. Project page: https://ouroworld.userwei.com",
    "published": "2026-10-08T17:59:46Z",
    "updated": "2026-10-08T17:59:46Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.12461"
  },
  {
    "id": "2610.11318",
    "title": "Finsler Flow Matching: Dynamics-Aware Geodesic Interpolation for Single-Snapshot Trajectory Inference",
    "authors": [
      "Niklas Canova",
      "Jonas Simon Fleck"
    ],
    "abstract": "Single-cell snapshot data can resolve a continuum of cellular states but do not uniquely determine the dynamics governing transitions between them. However, additional dynamical information can often be encoded in a cell-cell Markov transition kernel. Existing generative approaches for single cell trajectory inference either infer transport only from population marginals, impose a symmetric geometry on the state space, or incorporate directionality through a single velocity vector at each observed state. We introduce Finsler Flow Matching (FFM), a framework for learning continuous stochastic dynamics from discrete Markov transition graphs. We use the first and second local moments to construct a Finsler structure motivated by the Freidlin--Wentzell action, where the second moment determines anisotropic accessibility and the first moment introduces a preferred direction of motion. We learn neural approximations of the resulting directed geodesics, use their Finsler cost to construct source-target couplings, and define geometry-aware stochastic conditional paths that can be distilled into a continuous generative process through simulation-free score and flow matching. Across synthetic and single-cell trajectory inference benchmarks, FFM improves recovery of withheld intermediate populations, particularly when the transition dynamics are strongly directional or anisotropic. Our results provide a principled route from discrete transition probabilities to continuous generative dynamics while retaining both directional and diffusive structure.",
    "published": "2026-10-08T06:23:09Z",
    "updated": "2026-10-08T06:23:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11318"
  },
  {
    "id": "2610.11317",
    "title": "DivMoE: Fine-Grained MoE Upcycling via Cross-Domain Expert Composition",
    "authors": [
      "Yuxuan Lou",
      "Kai Yang",
      "Geng Zhang",
      "Yong Liu",
      "Yang You"
    ],
    "abstract": "Mixture-of-Experts (MoE) architectures have become essential for scaling large language models, with recent work demonstrating the benefits of fine-grained expert designs. Training such models from scratch is expensive, and sparse upcycling from pre-trained dense models is an attractive alternative. However, we identify a structural pathology of fine-grained upcycling: when fine-grained experts are derived from a single source model, naive routing collapses and downstream accuracy drops to near-random (e.g., on Qwen3-1.7B, Drop-Upcycling-fine-grained reaches only 23.2% average accuracy across 15 benchmarks, essentially matching from-scratch training at 22.2%, while the same method's coarse-grained variant reaches 50.2%). We propose DivMoE, the first framework achieving fine-grained MoE Upcycling with structurally-balanced routing. DivMoE introduces domain-specialized fine-grained expert initialization, deriving experts from dense models that have undergone domain-adaptive continual pre-training, and diversity-constrained routing, a hard structural constraint guaranteeing that each token activates experts from distinct domain groups. Across two base models and 15 benchmarks, DivMoE consistently outperforms six upcycling baselines (55.6% vs. 51.6% for the strongest baseline on Qwen3-1.7B) and strictly improves over the dense base model on every benchmark after Stage 2 continual pre-training -- closing the regression gap that has plagued prior fine-grained upcycling. After supervised fine-tuning on a public reasoning mixture, our 12B-parameter DivMoE model matches Moonlight-MoE (16B) at 64.5% average accuracy while outperforming a controlled NVIDIA-Upcycling baseline by 6.1 percentage points.",
    "published": "2026-10-08T06:23:01Z",
    "updated": "2026-10-08T06:23:01Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11317"
  },
  {
    "id": "2610.11316",
    "title": "MetaEncoder: Exploring the Limit of Bi-Encoders for Multimodal System One Decision Making with Natural Language Interface",
    "authors": [
      "Jianpeng Cheng",
      "Guangyu Sun",
      "Aashu Singh",
      "Benyu Zhang",
      "Haixing Dai",
      "Hossein Mansour",
      "Jiangfan Zhang",
      "Shlok Kumar Mishra",
      "Wei Sun",
      "Xuanming Cui",
      "Yanli Liu",
      "Qi Guo",
      "Max Xiangjun Fan",
      "Jun Xiao"
    ],
    "abstract": "System One models output constrained decisions and probability distributions rather than free-form text generation. While prevailing paradigms rely on structured schema objects to encode state, intent, and candidate choices, we revisit a fully natural language-based System One interface. In this framework, both the user request and each candidate option are expressed in natural language, supported by multimodal (image and video) auxiliary inputs. We introduce MetaEncoder, which fine-tunes a pre-trained Muse-Glimmer 30B decoder into an instruction-following decision-making encoder. To scale effectively across both small closed-set (< 256) and massive open-set (millions) candidate spaces, MetaEncoder employs a bi-encoder architecture trained via unidirectional contrastive learning for request-candidate alignment. We conduct extensive evaluations across 11 benchmark suites and 190 tasks spanning multimodal decision-making, understanding (closed-set) and retrieval (open-set), highlighting where MetaEncoder beats SOTA multimodal encoders, as well as its current limits on reasoning-intensive tasks.",
    "published": "2026-10-08T06:22:48Z",
    "updated": "2026-10-08T06:22:48Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11316"
  },
  {
    "id": "2610.11315",
    "title": "Deflating the Hessian: Rank-4 W4A4 Quantization for Multimodal Diffusion Transformers",
    "authors": [
      "Shiwen Wang",
      "Pengxiang Zhao",
      "Xiaoming Yuan"
    ],
    "abstract": "In diffusion transformers, low-rank branches can mitigate 4-bit weight--activation (W4A4) post-training quantization (PTQ) loss by decomposing each weight into a low-bit residual and a high-precision low-rank component. Existing low-rank PTQ approaches, however, either optimize low-rank compensation and residual quantization separately, often requiring higher ranks, or rely on second-order weight updates without explicitly modeling activation quantization error, which becomes particularly pronounced under 4-bit quantization. To address these limitations, we present HSVDQuant, a unified framework modeling low-rank-assisted W4A4 PTQ as a coupled calibration problem and deriving optimization-based solvers from the joint objective. Eliminating the output-side low-rank factor yields a deflated Hessian that discounts residual errors already captured by the low-rank component, while an activation-noise surrogate is incorporated to suppress activation quantization error. Across five diffusion backbones, rank-4 HSVDQuant consistently outperforms rank-4 SVDQuant in PSNR and LPIPS. It further surpasses rank-32 SVDQuant on SANA-1.6B, FLUX.1-schnell, and FLUX.1-dev with an $8\\times$ smaller rank and up to $6.25\\times$ faster quantization. Furthermore, on the Qwen3-8B LLM, rank-4 HSVDQuant improves MMLU accuracy from 61.50% to 68.17% over rank-32 SVDQuant. Overall, HSVDQuant achieves better W4A4 performance with substantially lower rank and quantization cost.",
    "published": "2026-10-08T06:22:19Z",
    "updated": "2026-10-09T04:09:36Z",
    "categories": [
      "cs.LG",
      "cs.CV",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.11315"
  },
  {
    "id": "2610.11312",
    "title": "MedBenchAgent: Towards Systematic Automation of Medical VLM Benchmark Construction",
    "authors": [
      "Yulin Fu",
      "Junren Wang",
      "Guangjing Yang",
      "Zhangyuan Yu",
      "Wanran Sun",
      "Jiabao Zhou",
      "Jin Yin",
      "Qicheng Lao"
    ],
    "abstract": "Large-scale construction of medical vision-language model (VLM) benchmarks is increasingly feasible with richly annotated imaging datasets and large language models (LLMs), yet existing automation largely focuses on generating evaluation items within predefined benchmark specifications. We study the broader problem of automatically deriving the specification itself: what to evaluate, which annotations support each task, and how to translate this evidence into reliable evaluation items. We formulate benchmark construction as constrained compilation, in which the benchmark specification is progressively derived from evaluation requirements, heterogeneous annotations, and medical knowledge. Based on this formulation, we introduce MedBenchAgent, a multi-agent framework with a Benchmark Intermediate Representation (BIR) that encodes task definitions, evidence mappings, evaluation protocols, and item specifications across construction stages. MedBenchAgent separates planning, which derives and verifies the specification, from instantiation, which constructs and audits items under the locked specification. MedBenchAgent achieves a Task-Space F1 of 90.9%, outperforming direct task induction (79.2-80.0%) and prior-guided induction (85.1%); 994 of 1,000 sampled items from correctly identified tasks pass human audit. We further demonstrate portability to a specialized medical domain and evaluate twelve VLMs, revealing task- and setting-specific variation obscured by aggregate scores. These results establish constrained compilation as a scalable and auditable framework for medical VLM benchmark construction beyond question generation.",
    "published": "2026-10-08T06:17:33Z",
    "updated": "2026-10-08T06:17:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11312"
  },
  {
    "id": "2610.11310",
    "title": "FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs",
    "authors": [
      "Kyeong-Rae Kim",
      "Sungnyun Kim",
      "Tae-Hyun Oh"
    ],
    "abstract": "While 3D spatial reasoning in dynamic egocentric environments is crucial for embodied intelligence, audio-visual large language models (AV-LLMs) lack explicit mechanisms to process and internalize global geometry directly from raw sensory streams. Existing approaches either require costly fine-tuning or underutilize the model's cross-modal reasoning capacities. In this paper, we propose FloorSAV, a novel framework that explicitly grounds spatial audio-visual context by rendering a dynamic 2D floormap. By integrating 3D point clouds, camera trajectories, spatial audio cues, and semantically grounded object landmarks, we inject this floormap into the AV-LLM as a synchronized stream with an egocentric video. AV-LLMs utilize their multi-modal capabilities to jointly reason over visual, auditory, and geometric cues in a single inference with floormap interpretation guidance. We further introduce SAVED-Bench (Spatial Audio-Visual Egocentric Benchmark with Dynamic Agents), constructing essential tasks of spatial capability in real-world scenarios: dynamic relativity, regional, and path reasoning QAs. FloorSAV improves AV-LLMs' spatial reasoning on various tasks from both SAVED-Bench and SAVVY-Bench. Studies with ground-truth floormaps demonstrate the substantial potential of FloorSAV with accurate spatial information.",
    "published": "2026-10-08T06:15:36Z",
    "updated": "2026-10-08T06:15:36Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.11310"
  },
  {
    "id": "2610.11309",
    "title": "From Geometry to Generalization: Why Row Normalization Can Beat Adam and Muon",
    "authors": [
      "Jihwan Kim",
      "Dogyoon Song",
      "Chulhee Yun"
    ],
    "abstract": "Different optimizers can fit the same training data while selecting classifiers with substantially different geometries, but whether this difference provably affects population performance remains unclear. We show that row-wise normalization can achieve strictly higher population accuracy than full-batch Adam, a proxy for random-reshuffling Adam, and exact-SVD Muon in high-dimensional multiclass classification. Under an isotropic Gaussian-cloud data model, this advantage arises because row normalization's class-wise Euclidean geometry asymptotically preserves the population decision-boundary directions, whereas Adam's coordinate-wise geometry and Muon's spectral geometry introduce nonvanishing distortions. Beyond isotropy, the advantage persists for full-batch training on class means with independently oriented class-mean and test-noise covariances. It holds for power-law spectra with class-mean exponent below one, even under heavily anisotropic test noise. When both covariances are diagonal and sufficiently close, the advantage over Adam can reverse, while applying the same random rotation to both restores it by changing only their alignment with Adam's coordinate axes. Synthetic and last-layer language-model experiments support the predicted advantage.",
    "published": "2026-10-08T06:15:13Z",
    "updated": "2026-10-08T06:15:13Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.OC",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.11309"
  },
  {
    "id": "2610.11306",
    "title": "Collaboratively Guided Adversarial Robust Distillation with Teacher-Favorable Examples",
    "authors": [
      "Zhi Li",
      "Haowei Liu",
      "Hongchen Yang",
      "Xiaoxuan Wang",
      "Song Gao",
      "Shaowen Yao",
      "Wei Zhou"
    ],
    "abstract": "Adversarial distillation transfers robustness from high-capacity teachers to compact students. Existing adversarial distillation methods mainly use teacher predictions on clean or adversarial examples to supervise student learning. However, teacher-favorable supervision within the perturbation neighborhood remains underexplored in adversarial distillation. We therefore propose Collaboratively Guided Adversarial Robust Distillation (CGARD), which jointly optimizes distinct student-adversarial and teacher-collaborative examples within the same perturbation neighborhood. The teacher-collaborative example is constrained to incur no greater cross-entropy loss under the teacher than the clean input. CGARD combines collaborative teacher guidance with adversarial teacher supervision to improve robust knowledge transfer. Experiments on CIFAR-10 and CIFAR-100, including white-box evaluation and additional black-box transfer evaluation, demonstrate consistent robustness improvements over strong adversarial distillation baselines.",
    "published": "2026-10-08T06:12:23Z",
    "updated": "2026-10-08T06:12:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11306"
  },
  {
    "id": "2610.11303",
    "title": "Efficient Multi-Granularity Knowledge Transfer for Radiology Report Generation",
    "authors": [
      "Xubin Zhong",
      "Zheyu Zhang",
      "Wenjian Qin",
      "Ning Wen"
    ],
    "abstract": "Radiology report generation can automatically generate clinical descriptions from X-ray images, thereby significantly improving the efficiency of radiologists. This task is challenging because it requires medical knowledge to accurately identify diseases and describe them in a professional manner. However, existing methods often overlook the importance of enhancing medical knowledge in describing pivotal areas, a capability that requires models to effectively extract and aggregate knowledge at multiple levels of granularity. Accordingly, we herein propose a novel and compact Efficient Multi-Granularity Knowledge Transfer (\\textbf{EMGKT}) method to address the above issues. First, we encode global knowledge embeddings using a medical vision-language model, which provides contextual medical knowledge. Moreover, we devise a novel Fine-Grained Knowledge Distillation (FGKD) training task which efficiently extract fine-grained knowledge. Specifically, the FGKD training task contains teacher embeddings and student embeddings. Teacher embeddings are encoded using extra priors; while student embeddings are learned from the teacher embeddings through knowledge distillation. During inference, the student embeddings are used to enhance fine-grained knowledge while the teacher embeddings are discarded, resulting in negligible computational costs and no need for extra priors. Finally, we further develop a mixture of disease diagnosis expert classifiers to enhance knowledge extraction. The classifiers are initialized using disease embeddings and are modeled as different experts to address various granularity features. Notably, \\textbf{EMGKT} can be efficiently applied to most existing methods. Extensive experiments are conducted on two widely-used public datasets and various baselines, which demonstrates the effectiveness and transferability of \\textbf{EMGKT}.",
    "published": "2026-10-08T06:09:28Z",
    "updated": "2026-10-08T06:09:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11303"
  },
  {
    "id": "2610.11302",
    "title": "iCATS: Fast Video Generation via Interaction-Aware Sparse Attention and Timestep-Adaptive Sparsity",
    "authors": [
      "Chengfeng Han",
      "Baole Ai",
      "Xianlu Bian",
      "Jie Yao",
      "Zilong Huang",
      "Ang Wang",
      "Dandan Ding"
    ],
    "abstract": "Training-free sparse attention offers a practical acceleration solution to Diffusion Transformers (DiTs) via reducing computations without fine-tuning. It typically involves estimating the importance of query-key regions and deriving sparse masks to compute only the important candidates, which inevitably introduces approximation errors that may degrade generation quality. To better balance the efficiency-quality trade-off, we propose iCATS, integrating improved importance estimation and sparse mask construction with an efficient hardware execution strategy. Specifically, for importance estimation, unlike previous works that perform independent clustering over query and key tokens based on feature similarity to estimate attention scores, iCATS demonstrates that clustering based on query-key dot-product interactions is more accurate and further reformulates this objective as a simple quadratic form for low-cost computation. For sparse mask construction, instead of using a fixed top-p rule, we observe that tolerance to sparse approximation errors varies across denoising timesteps and therefore introduce an SNR-guided sparsity schedule to adjust sparsity dynamically, leading to higher accuracy. Finally, for hardware execution, we devise a tail-merging strategy to reduce padding overhead caused by irregular cluster sizes, improving GPU kernel utilization. Extensive experiments show that iCATS achieves $2.03\\times$ acceleration with 31.017 dB PSNR on HunyuanVideo-T2V-13B and $1.55\\times$ acceleration with 29.301 dB PSNR on Wan2.1-T2V-14B, delivering a state-of-the-art efficiency-quality trade-off.",
    "published": "2026-10-08T06:09:04Z",
    "updated": "2026-10-08T06:09:04Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.11302"
  },
  {
    "id": "2610.11300",
    "title": "Characterizing Overconfident Failure in LLM-Based Code Generation",
    "authors": [
      "Ravishka Rathnasuriya",
      "Wei Yang"
    ],
    "abstract": "Large language models (LLMs) are increasingly used for automated code generation, but generated programs can appear syntactically plausible while still failing execution-based correctness checks. Existing validation methods, such as testing and program analysis, remain essential but are often incomplete, costly, or applied only after generation. Model-derived uncertainty is therefore a natural early reliability signal. This paper studies the dilemma of overconfidence in code LLMs where incorrect programs are often generated with token-level confidence comparable to correct programs. We study this dilemma across four open-source code models and three execution-based benchmarks. Our analysis begins by investigating whether existing uncertainty metrics provide reliable proxies for execution correctness in code generation. We then characterize overconfidence at both global and local token levels, asking whether incorrect programs remain indistinguishable from correct ones under confidence and entropy summaries, including selective generation and the limits of instruction tuning. Finally, we evaluate whether common mitigation strategies reduce this failure mode. Our study yields four findings. First, existing uncertainty signals provide only partial and model-dependent evidence of execution failure. Second, overconfidence persists at both program and token levels, and uncertainty-based selection does not consistently improve accepted-set accuracy. Third, instruction tuning can increase certainty on failing generations without consistently improving correctness discrimination. Fourth, common mitigation techniques improve specific aspects of reliability but do not reliably resolve overconfident failure. Our exploratory latent analysis suggests that hidden representations may encode correctness-related signals that output confidence does not expose.",
    "published": "2026-10-08T06:07:44Z",
    "updated": "2026-10-08T06:07:44Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.11300"
  },
  {
    "id": "2610.11299",
    "title": "DuplexAgent-RSI: Recursive Harness Improvement for Full-Duplex Voice Agent Collaboration",
    "authors": [
      "Yingda Shen",
      "Yuxiang Wang",
      "Kunyu Feng",
      "Qinke Ni",
      "Jiaqi Li",
      "Minghao Hsu",
      "Junan Zhang",
      "Dekun Chen",
      "Yutong Bian",
      "Zhizheng Wu"
    ],
    "abstract": "Voice agents are converging on a collaboration pattern: a full-duplex interaction model stays on the live channel as the entry to the conversation, while search, reasoning, and coding are handled through asynchronous delegation. A duplex model supports continuous listening and speaking, but complex reasoning and tool use may exceed its capabilities. A coding agent can plan and execute extended tasks, but its sequential interface is a poor fit for live conversation. Combining them requires a harness that coordinates task acceptance, progress, cancellation, replacement, and result delivery while keeping the conversation responsive. Existing harnesses often rely on coupled heuristics, making them difficult to improve systematically from evidence. We present DuplexAgent, a full-duplex collaboration system whose harness expresses this workflow as six editable modules, and Duplex-Harness-RSI, a closed loop that revises them from interaction traces. A simulator automatically generates timed test conversations, runs the system, and produces failure traces that identify the collaboration modules requiring repair. Reasoning LLMs and coding agents in the delegation pool also serve the improvement loop: the Exam Planner selects the next tests from observed weaknesses and the repair archive, and the Harness Editor proposes targeted module changes. The capabilities that serve the user thus also improve the system's coordination. Experiments on intelligence, agentic, and duplex benchmarks show that DuplexAgent combines continuous interaction with difficult reasoning and complex task execution, achieving stronger spoken-knowledge and executable-tool scores than the compared delegated systems while maintaining strong interruption response. A harness ablation further shows that this modular, verifiable loop outperforms the initial harness and repeated editing that lacks its diagnosis and repair archive.",
    "published": "2026-10-08T06:06:42Z",
    "updated": "2026-10-08T06:06:42Z",
    "categories": [
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.11299"
  },
  {
    "id": "2610.09875",
    "title": "SANet: Selective Attention Network for Infrared Small Target Detection",
    "authors": [
      "Yingmei Zhang",
      "Wangtao Bao",
      "Qin Xiao",
      "Yong Yang",
      "Weiguo Wan",
      "Yitao Luo",
      "Xueting Zou",
      "Lei Zhang"
    ],
    "abstract": "Infrared small target detection aims to accurately identify and locate dim targets in complex backgrounds and supports applications such as maritime surveillance and military search and rescue. However, the small size and weak contrast of infrared targets make it difficult to balance detection accuracy and false alarms. This paper proposes a selective attention network (SANet) for infrared small target detection. A dual-path semantic-aware module combines standard and pinwheel-shaped convolutions to preserve local spatial consistency and capture broader contextual information. Spatial and channel attention further refine the features and improve target-background discrimination. To address the limitations of static skip connections in U-Net, a selective attention fusion module adaptively integrates features across scales using spatially varying weights. It selectively enhances salient regions and improves discrimination between true targets and false alarms. Experiments on three public benchmarks, NUAA-SIRST, IRSTD-1K, and NUDT-SIRST, show that SANet achieves competitive performance in intersection over union (IoU), normalized IoU, detection probability, and false alarm rate. Its IoU exceeds that of the second-best method by 1.93, 4.32, and 2.21 percentage points, respectively. These results support the effectiveness of SANet in dim-target perception, discriminative feature representation, and background suppression.",
    "published": "2026-10-07T11:34:01Z",
    "updated": "2026-10-07T11:34:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09875"
  },
  {
    "id": "2610.09873",
    "title": "Bringing BNNs to Fast Event Processing",
    "authors": [
      "Paul Longour",
      "Julien Moreau",
      "Franck Davoine"
    ],
    "abstract": "Binary Neural Networks (BNNs) enable efficient deep learning deployment on resource constrained devices with weights and activations compressed to one bit, substantially reducing model size and inference cost. Event cameras offer complementary advantages, including low latency, high dynamic range, and low power consumption, by capturing asynchronous streams of events rather than dense image frames. Despite their shared emphasis on efficiency, the combination of these technologies remains largely unexplored. This work aims at adapting and evaluating modern deep BNN architectures on event data. We also show that cross-modal pretraining from RGB data can improve the classification accuracy of BNNs on neuromorphic datasets. We introduce the Polar-wise Binary Event Volume (PBEV), a binary representation that enables event-camera data to be processed directly by BNNs and represents a step toward fully binarized event-based vision systems. Best evaluated BNN on N-Caltech101 classification benchmarks shows 90.58% accuracy with 7.5x less operations than their full-precision counterparts.",
    "published": "2026-10-07T11:33:25Z",
    "updated": "2026-10-07T11:33:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09873"
  },
  {
    "id": "2610.09872",
    "title": "LiveMACE: Process-Aware Evaluation of LLM Agent Capabilities in Evolving Markets",
    "authors": [
      "Jun Zhao",
      "Leiming Fu",
      "Yanbo Wen",
      "Yiding Wang",
      "Xuantong Liu",
      "Yang Shu",
      "Yuyang Lu",
      "Xuanran Xing",
      "Jingqi Tong",
      "Hao Xu",
      "Qi Zhang",
      "Xuanjing Huang"
    ],
    "abstract": "Evaluating agents by outcomes alone can obscure the capabilities that produce them. This problem is especially pronounced in evolving environments, where outcomes reflect a closed-loop interaction between agent behavior and changing external conditions. We introduce LiveMACEBench, a process-aware benchmark that uses live financial markets as a naturally evolving testbed for persistent LLM agents. Five frontier LLMs operate along continuous trajectories under matched Tool Use, Persistent Memory, Rule Following, and Multi-Agent Collaboration configurations. We evaluate them through both realized outcomes and mechanism-specific diagnostics derived from complete decision traces. Across 30 days of live evaluation, we find a pronounced outcome-capability gap: realized returns often diverge from capability-specific measurements, and similar outcomes can arise from markedly different patterns of mechanism use. Trace-level diagnostics further expose distinct bottlenecks across capabilities, demonstrating that mechanism access, effective mechanism use, and downstream performance are not interchangeable measures of agent capability. LiveMACEBench makes this distinction measurable, turning live markets from a performance leaderboard into a diagnostic environment for agent capability",
    "published": "2026-10-07T11:33:21Z",
    "updated": "2026-10-07T11:33:21Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.09872"
  },
  {
    "id": "2610.09871",
    "title": "An AI-assisted conditioning and geological interpretation workflow for usage in implicit geological modeling",
    "authors": [
      "Stefan Carpentier",
      "Jan Diederik van Wees",
      "Eva de Boever",
      "Jan Niederau",
      "Camille Chapeland",
      "Suzanne Atkins",
      "Boris Boullenger",
      "Jens Wollenweber"
    ],
    "abstract": "Implicit modeling and Relative Geologic Time are geological modeling techniques that enable more efficient, faster, less biased and more reproducible modeling results. For optimal operation, these techniques require many well-constrained input data. In the framework of the Horizon Europe GO-Forward and MOOI WarmingUP GOO projects and to accelerate Implicit modeling, Machine Learning (ML) methods have been tested and implemented in a toolkit for the interpretation of (onshore) seismic data from the shallow to deep range (+- 300 - 3500 m). The goal is to rapidly characterise this depth domain by efficient interpretation of horizons and faults in seismic data. The first step is to improve the signal by applying AI techniques like self-supervised and semi-supervised contrastive learning CNN's for noise reduction and interpolation. Next, horizons and faults are interpreted with minimal use of human-generated training data by using (semi-) self-supervised methods. The resulting developed toolkit supports the application of the implemented algorithms in an efficient workflow. As a first demonstration, the top of the Dutch Maassluis Formation has been interpreted in the Leeuwarden and Waalwijk 3D seismic cubes. Overall, this study demonstrates that AI-assisted interpretation workflows have reached a level of maturity that allows their integration into applied geological modeling and decision-making.",
    "published": "2026-10-07T11:32:47Z",
    "updated": "2026-10-07T11:32:47Z",
    "categories": [
      "physics.geo-ph",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09871"
  },
  {
    "id": "2610.09870",
    "title": "Deadline-Aware Multi-Agent Reinforcement Learning for TSN-Based Vehicular Edge Networks",
    "authors": [
      "Bernardo A. C. Pereira",
      "Marcos Carvalho",
      "Fatih Temiz",
      "Shavbo Salehi",
      "Melike Erol-Kantarci",
      "Andreas Gavrielides",
      "Johann M. Marquez-Barja",
      "Daniel F. Macedo"
    ],
    "abstract": "Vehicular edge computing (VEC) enables latency-sensitive applications by bringing computing and networking resources closer to vehicles. However, existing approaches often overlook network contention among co-located services with heterogeneous and dynamic latency requirements. While time-sensitive networking (TSN) provides bounded-latency communication, conventional and reinforcement learning-based schedulers struggle to adapt to highly dynamic vehicular environments and inter-queue dependencies. To address these limitations, we propose a multi-agent reinforcement learning (MARL) approach for queue-level scheduling in TSN-enabled VEC. Each TSN queue is assigned an autonomous agent that jointly learns the queue service order and time-slot duration to minimize deadline misses under speed-dependent latency requirements. We employ multi-agent proximal policy optimization (MAPPO) to enable coordinated yet autonomous scheduling decisions. Evaluation against single-agent, multi-agent, and non-learning-based baselines shows that MAPPO provides robust performance across different traffic profiles. Compared with centralized single-agent methods, it reduces service latency by up to 66.2% and improves reliability by up to 271.8%. Furthermore, unlike urgency-based heuristics, MAPPO ensures balanced scheduling while achieving lower inference times compared to other MARL methods.",
    "published": "2026-10-07T11:30:19Z",
    "updated": "2026-10-07T11:30:19Z",
    "categories": [
      "cs.NI",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09870"
  },
  {
    "id": "2610.10628",
    "title": "Agent4RE: A Self-Refining Multi-agent Framework for End-to-End Software Requirements Engineering and Benchmarking",
    "authors": [
      "Yongjian Tang",
      "Linhan Li",
      "Thomas Runkler"
    ],
    "abstract": "Existing LLM-based approaches for software Requirements Engineering (RE) typically rely on basic prompting strategies or rudimentary agent collaboration, under-utilizing the full potential of multi-agent systems. Meanwhile, available datasets focus on isolated subtasks, such as requirements extraction, classification, and completeness detection, leaving the absence of an end-to-end RE benchmark that spans from requirements elicitation to generation. We present Agent4RE - a self-refining multi-agent RE system that orchestrates specialized agents and incorporates two iterative improvement loops. To support evaluation, we construct RE-E2E - a real-world dataset built from human-written requirement specifications, enabling end-to-end assessment of RE workflows. Building on this foundation, we further propose two enhanced Agent4RE versions that incorporate either autonomous self-refinement or structured human feedback, and analyze their strengths and limitations across different scenarios. Evaluation on 8 Large Language Models (LLMs) demonstrates that all three Agent4RE variants consistently outperform a domain-context-augmented prompting baseline by average 8% in text-based metrics. The two enhanced variants achieve the highest LLM-as-a-judge and human ratings, surpassing two RE baselines by approximately 0.8 points on a four-point scale. This consistent performance establishes Agent4RE as a practical end-to-end RE solution for industrial environments.",
    "published": "2026-10-07T11:23:11Z",
    "updated": "2026-10-07T11:23:11Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.10628"
  },
  {
    "id": "2610.09863",
    "title": "Global Average Precision for Representation Learning",
    "authors": [
      "Bill Psomas",
      "Mohammad Mahdi",
      "Michalis Thomas",
      "Danda Pani Paudel",
      "Giorgos Tolias",
      "Giorgos Kordopatis-Zilos"
    ],
    "abstract": "Standard information retrieval metrics, such as mean Average Precision (mAP), assess performance one query at a time, based on how the similarities between a query and its positives compare against those with its negatives. The same holds for common representation learning losses, such as InfoNCE and per-query AP surrogates. None of them considers whether similarities are comparable across queries, which any system with a single decision threshold relies on. Global Average Precision (gAP) does, by ranking all query-candidate pairs in one list and computing a single AP. We introduce gSAP, a differentiable surrogate of gAP. It needs only a similarity matrix and a binary matrix marking the positive pairs, the same input as existing losses, so it is a drop-in replacement for them and agnostic to the encoder, the modality, and the source of supervision. Since it considers all possible pairwise comparisons in the batch jointly, it also remains trainable at low temperatures, a regime where per-query surrogates run out of gradient. Swapping it into established recipes improves supervised metric learning, cross-modal alignment, and self-supervised pretraining, where, to our knowledge, it is the first ranking loss to replace the community standard InfoNCE in the latter two. Its similarities are more consistent across queries, which drives the gains under a universal threshold. gSAP retrieves up to four times as many positive pairs as the strongest AP surrogate at the same precision, and it degrades the least when queries with no positives in the database are added. Beyond thresholding, models trained with gSAP also learn better representations, with higher transfer, $k$NN and zero-shot classification accuracy.",
    "published": "2026-10-07T11:22:05Z",
    "updated": "2026-10-07T11:22:05Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09863"
  },
  {
    "id": "2610.09860",
    "title": "DeepTopoClustering: Unsupervised Derivation of Surface Process Taxonomy from 4D Point Clouds for Topographic Monitoring",
    "authors": [
      "Jiapan Wang",
      "Daan Hulskemper",
      "Mathilde Letard",
      "Roderik Lindenbergh",
      "Katharina Anders"
    ],
    "abstract": "4D point clouds acquired by permanent laser scanning (PLS) enable accurate high-frequency monitoring of surface change in dynamic topographic environments. However, existing methods remain limited in organizing detected surface activities into meaningful process types. We propose DeepTopoClustering (DTC), an unsupervised framework for deriving a hierarchical process taxonomy from object-based surface activities, so-called 4D objects-by-change (4D-OBCs). We transform each 4D-OBC into a GeoMorphogram, a distributional sequence representing the temporal evolution of topographic change within a spatially bounded surface activity. A convolutional autoencoder learns latent embeddings from GeoMorphograms, which are jointly optimized using a hierarchical deep clustering objective to organize surface activities into a hierarchy. We evaluate the learned hierarchy using expert annotations on two 4D datasets of sandy beach sites and their combination. DTC with GeoMorphograms achieves the highest agreement with expert judgment at the taxonomy level comprising eight major process types ($F_1=0.78$, match accuracy $=0.92$), outperforming dimensionality reduction and conventional flat clustering. The learned taxonomy separates major erosion- and deposition-dominated activities and distinguishes finer subtypes based on change magnitude, duration, compactness, and temporal evolution. DTC thus provides a scalable and interpretable route from 4D change detection to a data-driven, expert-supported surface process taxonomy, advancing automated knowledge derivation for understanding surface dynamics in topographic monitoring.",
    "published": "2026-10-07T11:16:19Z",
    "updated": "2026-10-07T11:16:19Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09860"
  },
  {
    "id": "2610.09858",
    "title": "Training Advisors for LLM Agents from Task Outcomes",
    "authors": [
      "Sergei Polezhaev",
      "Barys Liskavets",
      "Ori Press",
      "Alexander Golubev"
    ],
    "abstract": "Large language model agents tackle multi-step tasks by interleaving reasoning and tool calls with observations from the environment. Prior work has shown that natural-language feedback can help these agents revise their decisions during task execution. We introduce Caddie, a method for training critics to provide natural-language analysis and advice as agents work through a task. Unlike approaches that rely on step-level labels or reference critiques, Caddie learns from whether the agent ultimately succeeds after receiving the critic's feedback. We optimize the critic through reinforcement learning while keeping the base model frozen. Trained on multi-hop question answering with a single base model, our Qwen3-4B critic improves success rates across four base models of different scales and architectures, including three not used during critic training. On the MuSiQue benchmark, the trained critic improves Qwen3-4B's success rate by more than 25 percentage points, surpassing the performance of Kimi K3 without a critic. The same critic also yields gains on out-of-domain interactive benchmarks, including $τ^3$ and DeepDive, with no additional training. Our results show that agents can decide when to seek help from a critic at inference time and that outcome-based critic training can produce guidance that transfers across base models and task domains.",
    "published": "2026-10-07T11:14:26Z",
    "updated": "2026-10-07T11:14:26Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.09858"
  },
  {
    "id": "2610.09856",
    "title": "Self-Evolve With a Reference:Anchored Training of Tool-Integrated Agents",
    "authors": [
      "Wenjie Liao",
      "Liangjie Zhao",
      "Zehong Cao"
    ],
    "abstract": "Self-evolving tool-integrated agents learn from tasks and feedback generated within their own training loop. A Curriculum Agent generates tasks, while an Executor Agent learns from self-consistency signals through reinforcement learning. However, relying solely on the current Executor for feedback has two limitations: group-relative advantages vanish under full consensus, while uncertainty-based curriculum rewards favor disagreement without showing whether the generated tasks support further learning. These limitations motivate an additional reference beyond the current Executor. We propose \\textit{AnchorLoop}, which introduces a frozen copy of the previous iteration's Executor as a historical reference and reuses it on both sides of the training loop. For the Executor, the anchor provides a cross-reference advantage that evaluates current outputs against both current and historical majority answers. For the Curriculum, it provides an agreement-based reference based on differences in sampled majority agreement. Since the Executor and anchor have identical parameters during Curriculum training, this comparison serves as a proxy for task selection rather than evidence of inter-version improvement or correctness. Across 13 reasoning benchmarks, AnchorLoop improves over Agent0 by 2.5\\% on mathematical reasoning and 2.8\\% on general reasoning tasks. It also maintains higher effective-advantage variance and continues improving in later iterations as the unanchored baseline shows diminishing gains. These results demonstrate the benefit of introducing a lightweight historical reference into self-evolving tool-integrated agents without external task or answer supervision.",
    "published": "2026-10-07T11:13:35Z",
    "updated": "2026-10-07T11:13:35Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.09856"
  },
  {
    "id": "2610.09853",
    "title": "DeltaSplat: Iterative Gaussian Refinement for Pose-Free Feed-Forward 3D Gaussian Splatting",
    "authors": [
      "Chanung Park",
      "Seunghyeon Song",
      "Joo Chan Lee",
      "Eunbyung Park",
      "Jong Hwan Ko"
    ],
    "abstract": "Pose-free feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene from sparse, unposed images in a single network pass, removing the need for camera calibration and per-scene optimization. However, camera estimation errors propagate into the predicted Gaussians and compound the geometric and photometric inaccuracies of single-pass prediction. To correct these errors, we introduce DeltaSplat, a lightweight Gaussian refinement module for pose-free feed-forward 3DGS. It iteratively renders the current Gaussians at the input context views and predicts per-Gaussian updates from the resulting residuals. A 2D residual alone, however, underdetermines the 3D correction. DeltaSplat therefore conditions each update on per-pixel Plücker rays and rendered depth as a soft geometric prior. A dual-branch convolutional mixer efficiently encodes these inputs, and per-attribute heads decode the fused features into position, opacity, and color updates. The module adds only ~2.2% parameters to the backbone and remains fully feed-forward at inference. On DL3DV, DeltaSplat reaches 26.64 dB PSNR in the pose-free setting, improving its state-of-the-art backbone by 1.75 dB and surpassing even baselines supplied with ground-truth cameras; consistent gains hold across 6-24 views and all camera regimes.",
    "published": "2026-10-07T11:11:22Z",
    "updated": "2026-10-07T11:11:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09853"
  },
  {
    "id": "2610.09849",
    "title": "Hard, Yet Reducible: Controlled Forward Transfer for Synthetic Degradation Curation",
    "authors": [
      "Chunming He",
      "Kailai Zhou",
      "Jiaming Zuo",
      "Hanqi Liu",
      "Fengyang Xiao",
      "Youwei Pang",
      "Xiaofeng Liu",
      "Weisi Lin",
      "Xiaoqi Zhao"
    ],
    "abstract": "Selecting synthetic degradations for dense prediction requires an estimate of their training utility, the generalization gain they bring under a finite training budget. Clean and degraded twins share content and labels, suggesting a score based on how much short training reduces the excess error caused by degradation. However, this gap can also shrink when clean performance deteriorates. Measuring the improvement on degraded images alone avoids that confound, but it still credits progress that the same amount of clean training would have produced. We propose the \\textbf{controlled Reducible Degradation Gap} (cRDG) for regions defined by degradation type and severity. From a common checkpoint, cRDG runs two budget-matched probes that differ only in one augmentation slot, which holds either a synthetic degradation or a clean augmentation. The score is the gain on held-out degraded images relative to the clean-control probe. Clean harm is a separate feasibility constraint. cRDG reveals a correctable severity band in which training on the degradation yields high controlled gain under the available budget, and the band moves with the predictor, the starting checkpoint, and the training budget. \\textbf{Curation of Reducible Bands} (\\method) uses cRDG to select synthetic data without changing the predictor. On semantic segmentation and salient object detection, \\method{} improves representative predictors under matched synthetic-data budgets and training schedules, extends to existing data-generation pipelines, and preserves clean performance. Code and supporting materials will be publicly released.",
    "published": "2026-10-07T11:07:36Z",
    "updated": "2026-10-07T11:07:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.09849"
  },
  {
    "id": "2610.07996",
    "title": "TICDA: Tabular In-Context Data Attribution",
    "authors": [
      "Yacine Benihaddadene",
      "Milan Bhan",
      "Eliot Dugelay",
      "Mohammed Jawhar",
      "Benjamin Wong",
      "Nicolas Chesneau",
      "Duong Nguyen"
    ],
    "abstract": "Tabular foundation models (TFMs) achieve strong predictive performance by conditioning on labeled demonstrations provided in context, without any parameter update. Yet how individual demonstrations shape a given prediction remains poorly understood. This gap matters in practice: the context is often assembled from whatever labeled data is available, potentially leading to the inclusion of mislabeled, redundant, or low-quality examples that degrade performance. Standard data attribution methods do not transfer to the TFM setting: resampling-based approaches such as DemoShapley require a combinatorial number of forward passes, and gradient-based estimators such as influence functions require computing training point's effect on the model parameters, which in-context learning never updates. We introduce TICDA, a method that measures the influence of every demonstration in the context directly from linear surrogates trained on TFM latent embeddings, in a single forward pass and at negligible cost. We show that TICDA offers the best compromise against competitors across four tasks: detecting labeling errors, curating context to preserve predictive accuracy while lowering inference cost, producing attribution scores that transfer across TFMs, and supporting an acquisition strategy for efficient active learning.",
    "published": "2026-10-06T08:55:27Z",
    "updated": "2026-10-06T08:55:27Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07996"
  },
  {
    "id": "2610.07990",
    "title": "A Broader Look at Model Merging: Rethinking Implicit Regularization Induced by Task Arithmetic",
    "authors": [
      "Sin-Han Yang",
      "Shih-Cheng Huang",
      "Chieh-Yen Lin",
      "Yun-Nung Chen",
      "Shao-Hua Sun",
      "Hung-yi Lee"
    ],
    "abstract": "Model merging aims to build a multi-task model cheaply by combining the weights of individual task-specific models. To perform well across multiple tasks, most existing merging methods use an additional dataset to find the coefficients for the best linear combination of task-specific weight updates. However, we identify an implicit regularization in this standard practice: searching over coefficients restricts the candidate models to a subspace spanned by task-specific weight updates. In this work, we investigate whether this regularization is actually useful. Surprisingly, empirical results show that optimizing merged-model weights without this regularization significantly boosts the performance of common merging methods across multiple architectures, domains, and even in an extremely data-limited scenario where only one instance is available per class. Moreover, directly optimizing the pretrained model weights even outperforms some existing merging methods. Analysis shows that better multi-task weights exist outside the subspace and can be found using multiple methods. We study different strategies for using the additional dataset, discussing their practical use and implications for model merging. Overall, this work calls for revisiting the existing model-merging pipeline, motivating a broader exploration of the weight space and a reconsideration of the implicit regularization induced by task arithmetic.",
    "published": "2026-10-06T08:49:40Z",
    "updated": "2026-10-06T08:49:40Z",
    "categories": [
      "cs.LG",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07990"
  },
  {
    "id": "2610.07987",
    "title": "VisionWeave: Weaving Elastic Visual Representations as a Native Capability of MLLMs",
    "authors": [
      "Yuan Feng",
      "Qize Yang",
      "Ruizhe Chen",
      "Sibo Song",
      "Haolin He",
      "Muzhi Zhu",
      "Zihan Liu",
      "Yunfei Chu",
      "Xize Cheng",
      "Yuxuan Wang",
      "Jin Xu",
      "Xike Xie"
    ],
    "abstract": "Multimodal large language models have become the dominant paradigm for visual understanding, but incur substantial costs by encoding inputs into dense, fixed-size patch tokens. However, visual information is unevenly distributed: some regions require fine-grained detail, while others admit compact representations. Downsampling sacrifices this detail, while existing token pruning and adaptive approaches remain limited in content-adaptive granularity, task generalization, and integration with modern MLLMs and serving infrastructure. Overcoming these limitations calls for foundation models that learn, end to end, where-and at what granularity-to allocate visual representations, a native capability we term elastic visual representation weaving. We introduce VisionWeave, establishing this capability in frontier-level MLLMs through large-scale training. It combines two components: a gated spatial pooler constructs coarse-grained representations alongside native fine-grained representations within a shared MRoPE coordinate, while a granularity router learns their content-adaptive allocation. Through self-distillation alone, we validate this capability on Qwen3.5-4B and scale to Qwen3.8-27B with over 30K A100 GPU-hours. Based on Qwen3.8-27B, VisionWeave adaptively adjusts token savings to visual content, saving 43.0% tokens on average while retaining 98.9% native performance across eight benchmarks, versus only 88% performance preserved for token pruning baselines with a fixed 50% savings target. Extensive evaluations confirm robust efficiency-quality trade-offs across diverse tasks, resolutions and video frames. When deployed on SGLang serving engine, our method achieves a 2.3x throughput gain while reducing mean TTFT by 54.4% and mean TPOT by 60.6%. Together, we believe these results position elastic visual weaving as a promising capability for next-generation multimodal models.",
    "published": "2026-10-06T08:48:50Z",
    "updated": "2026-10-06T08:48:50Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07987"
  },
  {
    "id": "2610.07984",
    "title": "Decide Before You Look: Learning Which Retrieved Memories Deserve Pixels",
    "authors": [
      "Youxing LI"
    ],
    "abstract": "Multimodal assistants answer questions from long-term memories that contain images. After retrieval, each retrieved image reaches the answering model either as pixels, at about a thousand visual tokens per image, or as a stored text proxy that often misses the detail the question asks about. We find that the benefit of pixels usually comes from one or two retrieved memories, and that it can be predicted before the answering model runs, without reading any full-resolution image. In PixelTriage, a plug-in placed after retrieval, a small model that does not generate text reads the dialogue, a short note and a thumbnail of each retrieved memory and predicts how much its pixels would add. It is trained on synthetic memory episodes labeled by a frozen 27B model that answers each question with and without each memory's pixels. With a 7B answering model, PixelTriage lies on the accuracy--cost frontier of M$^3$Exam, DMV and MemEye and uses 11--23\\% of the visual tokens without a significant loss of accuracy. On DMV it answers 2.9 times faster than opening all images. It outperforms retrieval order and uniform down-sizing at equal budgets and transfers to other memory systems and to a 397B answering model.",
    "published": "2026-10-06T08:47:45Z",
    "updated": "2026-10-06T08:47:45Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07984"
  },
  {
    "id": "2610.07982",
    "title": "M3SunAgent: Monocular 3D Spatial Understanding Agent for Metric Depth Estimation and 3D Visual Grounding",
    "authors": [
      "Jinsong Zhang",
      "Kejun Wu",
      "Ming Zhu",
      "Renjie Qiao",
      "Chengtao Cai",
      "Zhengguo Li"
    ],
    "abstract": "Monocular metric depth estimation and 3D visual grounding represent the two complementary cornerstones of monocular 3D spatial understanding (M3Sun), from which the fundamental 3D spatial information required by M3Sun can be acquired. However, these complementary tasks are generally conducted by separate frameworks, which pose challenges of inflexible and unaligned spatial information access for embodied intelligence systems. In this paper, we propose a unified agent for monocular 3D spatial understanding (M3SunAgent) that leverages a large language model (LLM) as a task planner for spatial visual programming, which flexibly generate structured programs and coordinate tools. For instance-level metric depth estimation task, M3SunAgent invokes an object detector tool to locate the target, estimates depth at selected points with a depth estimation tool, and aggregates these predictions into an instance-level depth estimate. We also construct the M3Sun Instance (M3SI) dataset, a benchmark with 2,910 samples for evaluation. For monocular 3D visual grounding task, M3SunAgent uses a vision-language model (VLM) tool to locate the target and output basic spatial attributes, then combines back-projection tool with a dimension-lifting tool to predict its 3D bounding box. Experimental results demonstrate the superior performance of M3SunAgent. Specifically, in evaluations of instance-level monocular metric depth estimation, M3SunAgent achieves the best performance among all compared models, 52.61% of predicted instances are distributed below depth error 0.25 ($δ< 0.25$). In evaluations of monocular 3D visual grounding, M3SunAgent demonstrates overall competitive performance than vision and VLM models, reaching a 3D mean intersection over union (mIoU) of 41.73% and exceeding the state-of-the-art MonoVLM model by 3.62%.",
    "published": "2026-10-06T08:45:25Z",
    "updated": "2026-10-06T08:45:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07982"
  },
  {
    "id": "2610.07979",
    "title": "Learning from Revision Consequences: Hindsight Meta-Experience Distillation for Self-Improving Agents",
    "authors": [
      "Qianhan Feng",
      "Zhongzhen Huang",
      "Yakun Zhu",
      "Xiaofan Zhang",
      "Qi Dou"
    ],
    "abstract": "As agents continuously improve by generating and revising Skills, the process that discovers and refines those Skills becomes a learnable object in its own right. Task-Skills directly act on task execution, whereas Meta-Skills govern how agents discover and improve future Skills; their value therefore emerges through the subsequent search processes they induce. Existing approaches improve Meta-Skills from observed raw Skill-search trajectories and branch outcomes. However, branch performance entangles the effects of the initial discovery state and the Meta-Skill revision that generated the search process, making it difficult to characterize what a particular revision actually changed, and pushing updates toward revisions that benefit from favorable states rather than those that improve the process. We introduce HMED (Hindsight Meta-Experience Distillation), a mechanism for constructing Meta-Experience for self-improving agents. HMED revisits the completed event from which a revision originates and re-executes the incumbent and revised Meta-Skills from the same restored discovery state, so that the changes associated with the revision can be observed under a shared condition. Each comparison is distilled into a Meta-Experience, a structured record that can be reused by future updates, so that even revisions that are not ultimately retained still contribute a learning signal. Across three interactive agent benchmarks and both open-source and closed-source models, HMED consistently improves Skill discovery performance over strong baselines, shifting Meta-Skill learning beyond branch outcomes toward the consequences of changing the improvement process.",
    "published": "2026-10-06T08:43:43Z",
    "updated": "2026-10-06T08:43:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07979"
  },
  {
    "id": "2610.07972",
    "title": "Can Agents Work for Everyone? Cross-User Reliability for Mobile GUI Agents in Personalized User Interfaces",
    "authors": [
      "Yeji Park",
      "Jaeyun Shim",
      "Taesik Gong"
    ],
    "abstract": "Mobile GUI agents increasingly operate on interfaces influenced by users' histories and preferences, but their reliability across different users remains underexplored. We introduce PAIR (Personalized Application-state Instantiation and Rendering), a pipeline for constructing user-conditioned application states that enables controlled evaluation of the same task across different users. We further introduce RePAIR (Reinforcement learning with Personalization-Aware Interaction Rewards), a training approach that learns from cross-user differences in subgoal outcomes to improve reliability across user-conditioned mobile environments. Across six agents, we find substantial variation in task success across users and consistently lower subgoal achievement in user-conditioned UI contexts (6.98 to 15.4 pp). This gap further increases for personal targets drawn from each user's own content (8.77 to 22.0 pp). Failures in these contexts frequently involve selecting another item instead of the intended target, particularly before target exposure. Finally, RePAIR improves user-conditioned SAR (+5.87 pp), all-success (+7.50 pp), and overall Task SR (+9.42 pp) over its supervised fine-tuning parent on unseen users, providing initial evidence that explicitly learning from cross-user variation can improve GUI-agent reliability.",
    "published": "2026-10-06T08:38:30Z",
    "updated": "2026-10-06T08:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07972"
  },
  {
    "id": "2610.07969",
    "title": "EmbodiedSmith: Scaling Embodied Data through Recursive Self-Improvement Flywheel in Simulation",
    "authors": [
      "Yikai Qin",
      "Yifei Deng",
      "Mingjian Liang",
      "Wenxuan Song",
      "Zepeng Lin",
      "Zhiyi Jiang",
      "Jiajun Fu",
      "Qiao Sun",
      "Huashuo Lei",
      "Xicheng Gong",
      "Jiayi Chen",
      "Han Zhao",
      "Shuanghao Bai",
      "Pengxiang Ding",
      "Pengwei Wang",
      "Haoang Li"
    ],
    "abstract": "Scaling robotic foundation models requires diverse training data and reliable evaluation environments. Simulation offers a scalable solution, yet existing generation pipelines remain constrained by predefined assets and skills, a disconnect between scene generation and task generation, and limited support for complex embodiments and physics. We introduce EmbodiedSmith, a framework for scalable embodied data generation through recursive self-improvement (RSI). EmbodiedSmith unifies asset, scene, and task generation in a pipeline that supports autonomous creation and language-driven customization. Its core is an agentic refinement loop: scene generation anticipates downstream task requirements, while task generation guides targeted scene edits, allowing scenes and tasks to iteratively improve one another. This joint refinement improves task generation success, including for long-horizon tasks. The framework further supports mobile manipulators, humanoids, and dexterous hands, as well as interactions involving deformable objects and fluids, broadening the range of behaviors and physical phenomena represented in generated data. Together, these capabilities provide a flexible simulation engine for both robot pretraining and evaluation. Extensive experiments validate the quality, diversity, and generation efficiency of the resulting data, while downstream policy experiments demonstrate that increased data diversity improves generalization.",
    "published": "2026-10-06T08:34:28Z",
    "updated": "2026-10-06T08:34:28Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.07969"
  },
  {
    "id": "2610.07962",
    "title": "ReGraph: A Computational Account of Emergent Generalization in the \"what\" and \"where\" Dual Visual Streams",
    "authors": [
      "Hyewon Kang",
      "Jungmin Lee",
      "Ilgyu Lee",
      "Seok-Jun Hong"
    ],
    "abstract": "Where generalization capacity--the ability to extract context-invariant relational structures--first emerges remains a central question in AI and neuroscience. The foundation for this capacity lies upstream of the hippocampus, within the entorhinal cortex, where parallel pathways dissociate relational structure in the medial entorhinal cortex (MEC) from sensory content in the lateral entorhinal cortex. However, as Eichenbaum argued, such factorization likely originates earlier, driven by the segregation of the dorsal ('where') and ventral ('what') visual streams. Supporting this, grid-like firing patterns--a signature of MEC (context-invariant codes)--also appear in preceding neocortical regions along the dorsal pathway. Yet, how such representations are computationally formed along upstream pathways remains unknown. To investigate this in silico, we developed ReGraph, a recurrent dual-stream graph model with biological inductive biases, including retina-driven stream-specialized encoding, dorsal-to-ventral modulation, and dynamic lateral connectivity. Trained on the action benchmark Something-Something V2, ReGraph revealed a pathway-specific emergence of relational mapping: context-invariant codes and grid-like spatial bases uniquely co-emerged along the extended dorsal stream. In contrast, their absence in single-stream, unmodulated variants, and standard baselines implies that these inductive biases are prerequisites for relational structures. Crucially, our post-hoc analyses demonstrated that these grid-like bases serve as reusable routing templates for information processing via lateral connectivity. Together, our findings provide a computational account that generalization may not be a faculty that emerges abruptly within a dedicated region, but a property that already takes shape as sensory information is parsed into factorized streams of hierarchical visual processing.",
    "published": "2026-10-06T08:30:45Z",
    "updated": "2026-10-06T08:30:45Z",
    "categories": [
      "cs.NE",
      "cs.AI",
      "q-bio.NC"
    ],
    "url": "https://arxiv.org/abs/2610.07962"
  },
  {
    "id": "2610.07958",
    "title": "DensiTok: Making Feed-Forward 3D Gaussian Splatting See More Views Than It Is Given",
    "authors": [
      "Minhyeok Lee",
      "Jungho Lee",
      "Minseok Kang",
      "Heeseung Choi",
      "Ig-Jae Kim",
      "Sangyoun Lee"
    ],
    "abstract": "Feed-forward 3D Gaussian Splatting (3DGS) reconstructs a scene in a single forward pass, replacing per-scene optimization with a network trained across many scenes. Its quality, however, degrades sharply as the number of input images drops. The bottleneck is upstream of the reconstruction heads: from a few unposed views, the internal representation they read carries no evidence for unobserved regions, leaving holes, floaters, and blur. The common remedy supplies that evidence as pixels, synthesizing extra views with an image or video generator and re-encoding them, which is costly and not 3D-consistent by construction. We instead densify the evidence itself. We present DensiTok, a plug-in module for pretrained feed-forward 3DGS models that densifies their internal geometry tokens directly, making a frozen backbone behave as though it had observed many more views than it was given. DensiTok compresses those tokens into a compact latent space, completes the latents of the unobserved viewpoints in a single flow-matching step conditioned on camera geometry, and decodes them back into tokens that the original reconstruction heads. The same module design can be integrated into different pretrained predictors while keeping each backbone and its reconstruction heads frozen. Completion in a low-dimensional latent space requires no image synthesis or additional encoder passes. Across three pretrained backbones and two benchmarks, DensiTok consistently improves sparse-view reconstruction and recovers much of the gap to dense-view reconstruction.",
    "published": "2026-10-06T08:29:41Z",
    "updated": "2026-10-06T08:29:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07958"
  },
  {
    "id": "2610.07954",
    "title": "Revisiting Numerical Forecasting Models for Language-Based Trajectory Prediction",
    "authors": [
      "JunGyu Lee",
      "Inhwan Bae",
      "Hae-Gon Jeon"
    ],
    "abstract": "Language-based trajectory predictors represent coordinates as discrete tokens and learn auxiliary tasks such as destination and group reasoning. This formulation enables the model to capture behavioral intent and social context beyond coordinate dynamics alone. However, token-level objectives provide only indirect guidance for continuous coordinate-space dynamics. To address this limitation, we introduce MoRE (Mixture of Reward Experts), a refinement framework that transfers numerical forecasting priors into a pretrained language-based predictor through reinforcement learning. Five frozen numerical predictors provide complementary coordinate-level knowledge of motion and interactions. Their predictions are converted into expert rewards and combined through an uncertainty-weighted consensus that penalizes disagreement. A ground-truth reward anchors the prediction to the target trajectory. To focus refinement on difficult cases, MoRE refines the policy using the top 1% of training samples ranked by predictive entropy. Expert predictions are computed once and cached before PPO training, so the experts are not run during policy updates or inference. In this way, MoRE combines the contextual modeling of the language-based predictor with coordinate-level feedback from numerical experts. On ETH-UCY, MoRE reduces ADE from 0.22 to 0.20 m and FDE from 0.32 to 0.29 m. Relative to the base policy, ADE decreases by 17.9% on SDD and 12.7% on NBA. On ETH-UCY, MoRE also reduces collision rates and better matches ground-truth pedestrian spacing, without increasing measured inference memory or latency. The project page is available at https://jungyu0413.github.io/MoRE/.",
    "published": "2026-10-06T08:28:52Z",
    "updated": "2026-10-06T08:28:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07954"
  },
  {
    "id": "2610.07948",
    "title": "Confidence Reasoning Graphs: Structured Confidence Estimation for LLM Agents",
    "authors": [
      "Brendan King",
      "Farima Fatahi Bayat",
      "Jean-Flavien Bussotti",
      "Pouya Pezeshkpour",
      "Estevam Hruschka"
    ],
    "abstract": "When using an LLM agent in a consequential domain, making an informed decision about whether to trust its output or intervene requires calibrated confidence in the agent's success. Confidence estimation for agents is difficult because evidence about success is distributed across heterogeneous, interdependent steps of an agent's trajectory. Practical agentic deployments introduce further challenges: frontier LLMs often provide limited access to internal signals, agent roll-outs are costly, and training data may be unavailable or quickly become outdated. To address these challenges, we introduce Confidence Reasoning Graphs (CRGs), an inference-time framework that estimates the probability an agent accomplished its task from a single trajectory, without privileged model access or training data. Rather than compressing an execution into a single holistic judgment, a CRG begins with the claim that the agent accomplished its task, decomposes it into contextualized sub-claims grounded in trajectory evidence, estimates confidence for each terminal claim, and finally aggregates these into an overall confidence estimate. Across three agentic benchmarks, three backbone models, and three agent frameworks, CRGs yield better-calibrated confidence and stronger risk-aware decision making than verbalized, sampling-based, and white-box surrogate baselines. We further find that calibration error alone can be misleading: a white-box surrogate baseline appears well calibrated while providing near-chance discrimination. Ablations attribute CRG's improvements to claim-level confidence estimation and aggregation rather than graph construction alone. Finally, a CRG exposes the claims and trajectory evidence underlying each confidence estimate, enabling it to be audited at decision time.",
    "published": "2026-10-06T08:22:14Z",
    "updated": "2026-10-06T08:22:14Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.07948"
  },
  {
    "id": "2610.06582",
    "title": "Mind the Execution Gap: Action-Semantic Mismatch in World-Model Control",
    "authors": [
      "Shengtao Wen",
      "Xiang Chen",
      "Yu Tian",
      "Lingbing Guo",
      "Lina Gong",
      "Sheng-Jun Huang"
    ],
    "abstract": "World-model controllers rely on action-conditioned dynamics for prediction and planning, yet real control systems often execute commands asynchronously due to communication delay, packet loss, reordering, and actuator buffering. We study how asynchronous execution changes the action semantics assumed within world-model controllers, rather than treating it only as an external control disturbance. Through controlled interventions, we identify two architecture-dependent failure modes: planning-based controllers such as TD-MPC2 suffer from a future-action timeline mismatch between imagined and executed action sequences, while recurrent world models such as DreamerV3 can attribute observed transitions to commands that were not actually applied. Our analysis shows that TD-MPC2 requires the correct future action sequence during latent dynamics rollout, whereas DreamerV3 requires timely attribution of each transition to the action that generated it. Based on these findings, we introduce two lightweight execution-consistent interfaces, Future-Sequence for TD-MPC2 and Applied-Action Feedback for DreamerV3, that correct these mismatches without modifying the pretrained world models. Experiments across delays, packet loss, reordering, multiple control domains, measured network traces, and a process-separated asynchronous stack consistently support both diagnoses and the corresponding architecture-specific corrections.",
    "published": "2026-10-05T15:59:49Z",
    "updated": "2026-10-05T15:59:49Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06582"
  },
  {
    "id": "2610.06578",
    "title": "DGA-Muon: Decoupled Geometry-Aligned Adaptive Scaling for Muon",
    "authors": [
      "Wenpeng Zhang",
      "Runsheng Yu"
    ],
    "abstract": "While NorMuon has achieved strong empirical performance in pretraining, its underlying adaptive mechanism remains largely heuristic and poorly understood. In this work, we provide the first systematic theoretical analysis of NorMuon's adaptivity, revealing that it primarily arises from orthogonalization-induced geometry rather than genuine optimization dynamics, serving to offset the resulting geometric non-uniformity. Under exact orthogonalization, the adaptive scaling factors degenerate into a single global scalar for square and wide matrices, while for tall matrices their variation results from unevenly distributed row energy after orthogonalization. Under approximate orthogonalization, the orthogonality residuals introduce additional variation into the scaling, giving rise to a counterintuitive Orthogonalization--Adaptivity Paradox: more accurate orthogonalization weakens adaptivity. We further show that NorMuon's rigid row-wise scaling is geometrically misaligned with the one-sided orthogonal structure of tall matrices by distorting column orthogonality. Motivated by these limitations, we propose two core design principles that a desirable adaptive mechanism for Muon should satisfy. First, adaptive scaling should be decoupled from orthogonalization, with the scaling factors computed directly from raw gradients. Second, adaptive scaling should be aligned with the shape-dependent orthogonal structure of the polar factor, using row-wise scaling for wide matrices and column-wise scaling for tall matrices. We prove that this geometry-aligned scaling preserves the orthogonal structure of the update. By incorporating several other techniques, we obtain Decoupled Geometry-Aligned Muon (DGA-Muon). We establish convergence guarantees for DGA-Muon and empirically validate both our theoretical characterization of NorMuon's scaling degeneration and the superiority of DGA-Muon.",
    "published": "2026-10-05T15:56:02Z",
    "updated": "2026-10-07T11:39:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06578"
  },
  {
    "id": "2610.06575",
    "title": "FrontVeg V2: A Training-Free Software Framework for Foreground-Aware Zero-Shot Plant Trait Segmentation in High-Resolution Images of Trellised Crops",
    "authors": [
      "Abdoul Djalil Ousseini Hamza",
      "Herearii Metuarea",
      "Corentin Lothod{é}",
      "Morgane Roth",
      "Jacem Ben Hamden",
      "Eric Duch{ê}ne",
      "Lionel Ley",
      "David Alletru",
      "David Rousseau"
    ],
    "abstract": "FrontVeg V2 is an open-source, training-free software framework for foregroundaware zero-shot segmentation of plant traits in high-resolution images of trellised crops. The pipeline combines monocular depth estimation, automatic foreground extraction using Valley-Aware Depth Thresholding, tiled zero-shot segmentation, Graph-Based Mask Assembly, and geometry-aware fusion. This design enables plant organs and disease symptoms to be segmented while reducing detections arising from neighboring vegetation rows. The current implementation integrates Depth Anything V2 (DAV2) and SAM3 and can be used through both command-line batch processing and a Napari graphical interface. FrontVeg V2 provides a reusable framework for multi-crop, multi-trait digital phenotyping without task-specific model retraining.",
    "published": "2026-10-05T15:53:57Z",
    "updated": "2026-10-05T15:53:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.06575"
  },
  {
    "id": "2610.07111",
    "title": "LiLib: Lifelong Air-to-Ground Path-Loss Prediction on UAVs via a Drift-Triggered Model Library",
    "authors": [
      "Minh Tran"
    ],
    "abstract": "UAVs that act as relays or base stations need accurate air-to-ground path-loss predictions for rate adaptation and placement, but propagation conditions change as a UAV moves between suburban, urban and high-rise areas, and the same areas are often revisited. Online regressors that adapt by forgetting must relearn each environment from scratch, whereas a single model trained on all data averages incompatible regimes. We propose LiLib, a lightweight continual-learning scheme in which a UAV maintains a small library of recursive-least-squares experts. A windowed residual test detects drift; a short probe phase then either reuses the best stored expert or creates a new one. In simulations based on four standard urbanization profiles, LiLib reduces prediction RMSE from 5.89 dB (best sliding-window baseline) to 4.03 dB (p < 0.001), lowers the error shortly after a return to a known environment from 12.3 dB to 5.7 dB, and recovers 99% of the throughput of a regime-aware oracle in rate adaptation. The library stores four experts in under 0.5 KB, and identifies regimes with 92% purity without labels. When a second UAV is initialized with the library of a peer, its error after environment changes halves. LiLib does not reach the oracle, and similar regimes may be merged when shadowing is strong. The results indicate that, for recurring drift, remembering is more effective than re-adapting.",
    "published": "2026-10-05T15:53:19Z",
    "updated": "2026-10-05T15:53:19Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.07111"
  },
  {
    "id": "2610.06571",
    "title": "BrainTRACE: Tracing Longitudinal, Multimodal, and Volumetric Evidence in Brain MRI Clinical Reasoning",
    "authors": [
      "Qizhen Lan",
      "Mengchen Fan",
      "Hang Zhang",
      "Jingwei Duan",
      "Moule Lin",
      "Jialin Chen",
      "Baocheng Geng",
      "Xiaoqian Jiang"
    ],
    "abstract": "Brain MRI interpretation is a longitudinal clinical reasoning problem: radiologists compare serial studies, integrate information across MRI sequences, localize findings within volumetric anatomy, and translate this evidence into report-grounded assessments. Existing medical VQA and 3D imaging benchmarks capture important parts of this workflow, but often evaluate brain MRI through isolated images, static volumes, or ungrounded report-style answers, thereby obscuring failures in the evidence chain that support clinical validity. We introduce BrainTRACE, a report-grounded benchmark for evaluating whether vision-language models can trace the evidence structure required for longitudinal brain MRI interpretation. BrainTRACE contains 7,273 scored VQA instances derived from 1,778 longitudinal patients, 7,299 MRI studies, and approximately 29k co-registered 3D MRI sequence volumes. The benchmark is organized by five levels of clinical reasoning, from acquisition recognition to case-level synthesis, and by evidence demands covering longitudinal comparison, report-grounded references, multi-sequence integration, and volumetric spatial evidence. BrainTRACE supports rendered inputs compatible with standard VLM interfaces, a 3D-evidence condition, and a decomposed case-reasoning track that audits six steps in a longitudinal evidence chain. Evaluation of 20 VLM configurations shows that current systems can identify isolated visual cues but rarely compose them into grounded longitudinal interpretations. We release the benchmark specification, evaluation lists, scoring implementation, scoring rubrics, and audit-record format to support reproducible progress in brain MRI VLM evaluation.",
    "published": "2026-10-05T15:52:37Z",
    "updated": "2026-10-05T15:52:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06571"
  },
  {
    "id": "2610.06563",
    "title": "HERA: Harness-Environment Co-Evolution for Reliable Agentic Abstention",
    "authors": [
      "Han Luo",
      "Bingbing Wen",
      "Guang Yang",
      "Zora Zhiruo Wang",
      "Pan Lu",
      "Lucy Lu Wang"
    ],
    "abstract": "Large language model (LLM) agents are increasingly capable of acting in complex tool-use environments, yet they often fail to recognize when tasks are infeasible and no valid solution exists. Recent work has formalized this reliability gap as the problem of agentic abstention, and existing approaches typically optimize a model or agent harness against a fixed set of tasks, leading to limited generalization to unseen failure modes. We introduce HERA, a framework for harness-environment co-evolution for agentic abstention. HERA consists of (i) a pipeline to automatically construct verifiable pairs of feasible and infeasible tasks by applying controlled environment mutations that transform solvable tasks into cases requiring abstention, and (ii) a co-evolution procedure in which performance failures on previous tasks are used to drive harness adaptation and generate new execution environments and tasks geared towards previous weaknesses. On held-out evaluation tasks, an evolved harness from HERA improves abstention accuracy from 61.7% to 83.3% while improving feasible-task completion from 68.3% to 76.7%, achieving the highest abstention and feasible-task completion among the compared methods. The resulting best harness transfers across 19 other LLMs, improving abstention accuracy by 15.3 percentage points on average without any model-specific optimization, and enabling smaller models to match the performance of more powerful models at an estimated 85% lower cost.",
    "published": "2026-10-05T15:49:12Z",
    "updated": "2026-10-05T15:49:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06563"
  },
  {
    "id": "2610.07110",
    "title": "MoonGS: High-quality Representation of the Lunar Surface via Gaussian Splatting Using Robust Depth Features from Image Pairs",
    "authors": [
      "Yun Jiang",
      "Bo Zheng",
      "Yingying Zhang",
      "Xueming Xiao",
      "Tao Hu",
      "Hutao Cui",
      "Zhiguo Meng",
      "Ke Gao",
      "Yang Gao",
      "Meibao Yao"
    ],
    "abstract": "High-quality 3D reconstruction of lunar terrain from sparse rover images is indispensable for autonomous lunar exploration, but remains challenging because viewpoint overlap is insufficient, surface textures are weak, and data volume is limited. We propose MoonGS, the first feed-forward 3D Gaussian Splatting framework tailored to lunar scenes. Given only two input images, MoonGS predicts pixel-aligned Gaussian primitives in a single forward pass and renders photorealistic novel views without any per-scene optimization. MoonGS (i) adopts an adaptable backbone design that seamlessly integrates advanced vision foundation models to extract robust depth features; (ii) integrates semantic priors in two manners: merging semantic cues with visual features to refine Gaussian parameter estimation, and adopting a semantic ranking loss that regularizes background depth; and (iii) employs an entropy-guided heuristic resampling strategy to augment sparse observations by selecting the most informative distant viewpoints with negligible overhead. Experiments on the LuSNAR benchmark and our synthetic weak-texture MoonBlender dataset show that MoonGS surpasses state-of-the-art feed-forward NeRF/3DGS baselines by +4.9 dB PSNR, +0.29 SSIM, and 40\\% lower LPIPS while maintaining sub-second inference. Furthermore, we validate the broad applicability of our framework by demonstrating that it effectively leverages state-of-the-art backbones, including VGGT, to significantly boost performance. Qualitative evaluations on Chang'e mission imagery also show the best visual quality among compared methods, indicating robustness on real lunar data. The source code and dataset are publicly available at https://github.com/InRobots/MoonBlender.",
    "published": "2026-10-05T15:46:50Z",
    "updated": "2026-10-05T15:46:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.07110"
  },
  {
    "id": "2610.06553",
    "title": "Signature-Based Feature Learning for Human Activity Recognition: A Reproducible Machine Learning Study of Representation, Depth, and Model Choice",
    "authors": [
      "Kamal Jarrar",
      "Jacky Cresson",
      "Christian Paroissin"
    ],
    "abstract": "Human activity recognition (HAR) relies on transforming sensor signals into informative representations for classification. Although deep learning and handcrafted features are widely used, the role of representation itself is often not systematically isolated. Signature transforms provide a mathematically grounded way to encode temporal order and cross-channel interactions, but their value for HAR under a fully reproducible and leakage-aware framework remains unclear. To evaluate whether signature-based feature learning improves HAR performance compared with raw-signal baselines, and to assess the effects of embedding strategy, truncation depth, model choice, and sensor configuration. Experiments were conducted on the UCI HAR dataset using a fully reproducible pipeline with the original train--test split preserved and subject-disjoint validation to prevent leakage. Three representations were compared: raw flattened signals, time-augmented paths, and lead--lag transformed paths. Signature features were computed at multiple truncation depths and evaluated using multilayer perceptron (MLP) and Random Forest (RF) classifiers under identical preprocessing and validation procedures. A prior K-means-based feature reduction study was also reproduced for comparison. Signature-based representations improved performance when paired with RF models, the best configuration was time-augmented six-channel signatures at depth 6 using entropy-based RF achieving 0.858 accuracy and 0.859 macro F1, outperforming the strongest raw baseline (0.816 accuracy). Lead--lag representations were competitive at moderate depths but did not surpass the best time-augmented models. MLP models did not exceed raw baselines. Signature-based feature learning can improve HAR, but its benefit depends on alignment between representation design and classifier choice.",
    "published": "2026-10-05T15:44:23Z",
    "updated": "2026-10-05T15:44:23Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06553"
  },
  {
    "id": "2610.06549",
    "title": "Proof-Grounded Patient-Specific Clinical Explanations from Knowledge-Graph Reasoning",
    "authors": [
      "Surajit Das"
    ],
    "abstract": "Clinical decision-support outputs can lack an au- ditable link between patient observations, encoded knowledge, conclusions, and recommendations. We present the CKG Clinical Explanation Engine, a downstream layer for a frozen, training-free clinical knowledge-graph reasoner that converts patient inference states and disease knowledge into typed facts, explicit rule-application traces, provenance-linked conclusions, and policy-licensed recommendations. The design separates measurement availability, representation completeness, and disease-specific activation; consequently, observed zero-activation evience is not treated as missing and partial representation is distinct from unobserved evidence. Optional language generation is restricted to symbolically licensed content. Across five usable workbooks (6,720 patients; 20,160 patient-disease traces; 1,021,440 feature-evidence rows), IG-range validity and knowledge provenance were 100%, numerical cross-sheet fidelity was 100% (120,960/120,960), and exported logical/report trace completeness was 100% (20,160/20,160). Availability representation consistency was 99.7028% (1,018,404/1,021,440); all 3,036 disagreements were confined to three systematic feature-cohort patterns. The corpus contained 86,783 observed zero-activation and 139,949 observed partially represented instances. A separate seeded 25-patient end-to-end audit completed without execution failure and passed all pre-specified trace, licensing, provenance, and state-consistency checks. These results establish structural and implementation auditability, not clinical correctness or utility.",
    "published": "2026-10-05T15:41:31Z",
    "updated": "2026-10-05T15:41:31Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06549"
  },
  {
    "id": "2610.06535",
    "title": "Symmetry and AI-assisted discovery of magic-state factories",
    "authors": [
      "Shubham P. Jain",
      "Adam Wills",
      "Shraddha Singh"
    ],
    "abstract": "Magic-state distillation is a major resource cost in fault-tolerant quantum computing. The cost of a magic-state factory depends strongly on its failure rate, which grows with the number of input magic states. Although symmetry-restricted methods have recently made distance two searches tractable, distance three and above have remained elusive at moderate input counts. We develop symmetry- and AI-assisted methods to search this regime. We present a unified binary-matrix formulation encompassing both triorthogonal-code and direct circuit searches. We show that distance at least three is equivalent to nonzero, pairwise distinct syndromes, separating the choice of syndromes from the search for compatible output gates. We restrict the syndrome search using group symmetry and language-model agents, followed by deterministic solving and independent verification. Our searches yield 699 factory classes, including 564 new ones. These include factories for pure-T states and factories with entangled outputs comprising combinations of T, CS, and CCZ magic states. The pure-T factories [[63, 11, 3]] and [[850, 128, 6]] achieve the lowest overhead exponents we know among protocols with at most 100 and 1000 inputs, respectively, with $γ= 1.589$ and $γ= 1.057$. Our [[1715, 287, 6]] factory, with $γ= 0.998$, is the smallest known pure-T factory with $γ< 1$. We also provide a context directory of search briefs and campaign notes with which readers can train their own agents and tailor the search to their requirements. With these results, we begin constructing an active, open-source repository of magic-state distillation protocols for the quantum community, supplemented by our methods and data, for the practical fault-tolerant quantum computing regime.",
    "published": "2026-10-05T15:36:37Z",
    "updated": "2026-10-05T15:36:37Z",
    "categories": [
      "quant-ph",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.06535"
  },
  {
    "id": "2610.06532",
    "title": "AICoFe Demo: AI-based Collaborative Feedback System",
    "authors": [
      "Alvaro Becerra",
      "Alejandra Palma",
      "Ruth Cobos",
      "Julian Fierrez"
    ],
    "abstract": "Peer feedback promotes active learning, critical reflection, and skill development, but its effectiveness is often limited by the quality of feedback students provide. Recent advances in LLMs offer new opportunities to support peer feedback by generating more coherent and actionable feedback while preserving human oversight. This paper presents AICoFe, an AI-based collaborative feedback system designed to support teacher, peer, and self-assessment in higher education. AICoFe integrates rubric-based evaluations, GenAI-supported feedback, Learning Analytics dashboards, and video recordings to foster reflective learning. The system combines quantitative scores and qualitative observations to generate structured feedback focused on strengths, areas for improvement, and actionable recommendations, which teachers can review and curate. An evaluation with 65 undergraduate and master's students shows high satisfaction with the coherence and usefulness of the feedback, as well as the excellent usability, indicating that AICoFe effectively supports peer feedback in authentic educational settings.",
    "published": "2026-10-05T15:35:09Z",
    "updated": "2026-10-05T15:35:09Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.06532"
  },
  {
    "id": "2610.06522",
    "title": "Anatomy of LLM Sycophancy: What a Flip Rate Hides",
    "authors": [
      "Haonan Huang"
    ],
    "abstract": "A model under pushback can correct itself, capitulate, or hold, and one flip rate counts a correction and a capitulation alike. Using SycoLens, a modular replay protocol, we test how user pressure and evaluation settings shape measured flip rates. Each measurement is one stateless replay of an item, a committed answer, and one scripted user line in a fixed form. Every effect is read against a matched control with the line deleted. Pushback wording, committed text, answer format, boundary distance, and ground truth become factors of one instrument; earlier instruments vary one to three of them. Across eleven frontier models from three providers and about 760,000 controlled replays, which models look sycophantic depends on how the user pushes back. Lines that assert the opposite verdict and lines that challenge the answer without asserting one rank the models almost unrelatedly. Flip effects grow several-fold near a model's boundary, yet items answered identically in every screening draw still carry about half of the most-affected totals. On arithmetic tasks where the truth is known, one model re-derives and corrects itself under pressure while another abandons correct answers without written work. On the model tested, a planted derivation lowers release of the answer it argues for, true or wrong, where a bare stated value does not; the wrong answer is corrected much more often than the true one is abandoned. Under a yes/no readout the rankings come closer, entangled with a pressure-induced shift toward \"no\". One score per model therefore compares different behaviours across models and benchmarks. We condense these dependencies into a reporting profile; the instrument, records, and analyses will be released upon publication.",
    "published": "2026-10-05T15:32:45Z",
    "updated": "2026-10-05T15:32:45Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.06522"
  },
  {
    "id": "2610.05076",
    "title": "Self-Generated Feedback Destabilizes Test-Time Training: A Causal Decomposition of Long-Horizon Adaptation",
    "authors": [
      "Cheng Luo",
      "Bing Li",
      "Bernard Ghanem"
    ],
    "abstract": "Test-time training (TTT) lets a model store information in its weights during inference. When the model learns from its own output, however, each update also changes the model that generates the next training example. Across 128K-token streams, retaining generated-text updates worsens prediction on independent human-written text with three TTT-E2E model configurations (labeled 125M, 760M, and 3B). The same failure occurs when Adam updates Qwen3-4B's existing weights. The same update mechanisms can improve on real text, so writing itself is not the failure. Three matched comparisons trace the causal pathway. Fixed Generation removes over 98% of the damage at 125M and 760M by using a frozen model to generate training chunks. Recorded Replay separates the loss caused by reading degraded text from the additional loss stored by updating on it. A paired one-update comparison then shows the local conflict: an update predicts its source better but new real text worse. This cost grows after Closed Loop adaptation, with a few trajectories accounting for most large failures. Finally, Settlement evaluates the candidate state on independent real text before commitment. It leaves mean endpoint gaps of 0.07 and -0.02 nats at 125M and 760M while retaining real-text adaptation. These results motivate checking prediction on independent evidence before retaining an update.",
    "published": "2026-10-04T09:21:14Z",
    "updated": "2026-10-04T09:21:14Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05076"
  },
  {
    "id": "2610.05071",
    "title": "Discrete Action Matching: Learning Stochastic Dynamics from Samples via State Graphs",
    "authors": [
      "Mikhail Persiianov",
      "Alexander Korotin"
    ],
    "abstract": "Learning population dynamics from unpaired temporal marginals is an ill-posed inverse problem that requires structural assumptions on the underlying dynamics. We introduce $\\textit{Discrete Action Matching}$ (DAM), a finite-state counterpart of Action Matching based on discrete Wasserstein geometry. For a prescribed marginal path and transport geometry, we derive an action-minimization objective for its canonical minimum-kinetic-energy current. Our key observation is that the density dependence of the discrete action reduces to neighboring density ratios. Along an empirical interpolation of the snapshots, DAM first estimates these ratios and then learns an action potential. The learned fields also define a graph-supported Markov sampler. Experiments on controlled synthetic dynamics and real mouse gastrulation data evaluate marginal reconstruction and interpolation. Additional experiments approximate numerical surface-transport paths from paired samples.",
    "published": "2026-10-04T09:13:33Z",
    "updated": "2026-10-04T09:13:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05071"
  },
  {
    "id": "2610.05066",
    "title": "Salvation Lies Within: Eliciting Inherent Style Transfer in Step-Distilled Diffusion Models",
    "authors": [
      "Shengyin Sun",
      "Yiming Li",
      "Yingzhao Lian",
      "Xing Li",
      "Xingzhi Zhou",
      "Anxin Tian",
      "Zhili Wang",
      "Haoyang Li",
      "Ziqiang Cui",
      "Chen Ma"
    ],
    "abstract": "Adapting step-distilled text-to-image (T2I) models through post-training incurs additional computational costs and affects native few-step generation behavior. This motivates a complementary route beyond style-specific adaptation: drawing on the visual knowledge already encoded in step-distilled T2I models to elicit stylistic capabilities through language. Pursuing this direction requires textual guidance that captures how visual attributes jointly define a style and remain applicable as the depicted content changes. To explore this approach, we introduce StyleForge, a fully automatic, training-free framework that expresses reference styles as reusable rendering instructions. By integrating overall rendering characteristics with local color and lighting behavior, StyleForge organizes visual evidence from reference images into a coherent specification of how the target style should be expressed. The specification is then compiled into textual guidance that can be reused across content prompts, enabling frozen step-distilled T2I models to render different subjects and scenes in the reference style while retaining native few-step generation. Extensive experiments show relative gains of up to 29.47\\% in generation quality scores over the strongest baseline, while Pareto analysis indicates that improved stylization is accompanied by strong adherence to the requested content.",
    "published": "2026-10-04T09:06:57Z",
    "updated": "2026-10-04T09:06:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05066"
  },
  {
    "id": "2610.05060",
    "title": "Why, Where, How: Taxonomy-guided Error Grounding for Code Repair in NL2SQL",
    "authors": [
      "Suchan Lee",
      "Woomin Song",
      "Hwanjo Yu",
      "Sangwoo Mo"
    ],
    "abstract": "SQL queries that large language models write from natural language questions can execute successfully yet produce incorrect results, so execution alone does not reveal what to fix. An error taxonomy says why the query is wrong, but not where to look or how to change it. Existing methods can guide SQL correction through feedback, error reports, or generated plans alongside an unmasked query. We introduce TEG(Taxonomy-guided Error Grounding), which turns a supplied diagnosis into a structured correction input for natural language-to-SQL (NL2SQL) correction. Type-specific rules map each error type to construct classes to reconsider and an edit operation to request. TEG masks the selected constructs in the query when applicable and states that operation in an edit instruction. TEG generates candidate corrections from this input, uses execution feedback to guide candidate selection, and repeats the process one annotation at a time for queries with several errors. On NL2SQL-BUGs, TEG reaches 47.3 single-error execution accuracy and 37.0 overall with Qwen2.5-7B-Instruct. Across the model sizes and thinking modes evaluated in the main comparison, TEG outperforms all evaluated baselines on single-error queries, even when the baselines receive the same error-type annotations. With predicted types, TEG stays above direct LLM correction and ErrorLLM on single-error queries.",
    "published": "2026-10-04T09:04:33Z",
    "updated": "2026-10-04T09:04:33Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05060"
  },
  {
    "id": "2610.05053",
    "title": "CoDG-Net: Structure-Guided Style Diffusion and Collaborative Learning to Mitigate Catastrophic Forgetting in Medical Image Domain Generalization",
    "authors": [
      "Yucheng Song",
      "Jincan Wang",
      "Haokang Ding",
      "Zhiqiang Tian",
      "Kangxu Fan",
      "Zhifang Liao"
    ],
    "abstract": "Domain Generalization (DG) for medical image segmentation is both highly challenging and critically important. However, existing medical DG methods largely overlook the issue of Catastrophic Forgetting (CF): \\textbf{Models often sacrifice their ability to retain source-domain knowledge while pursuing cross-domain robustness.} This can directly threaten diagnostic safety in already-deployed clinical scenarios. To address this, we investigate data augmentation strategies and catastrophic forgetting for medical image DG segmentation. First, we propose a structure-guided style diffusion augmentation method. Constrained by anatomical structure consistency in the frequency domain, this method performs cross-domain diffusion on the amplitude spectrum, generating samples with more diverse and broader style coverage to better support domain generalization. Then, we design a collaborative learning network with a dual-branch interactive architecture (CoDG-Net), together with a novel learning bias-guided strategy that adaptively regulates knowledge transfer at both the layer level and the task level, thereby effectively mitigating catastrophic forgetting on the source domain. Experiments and ablation studies on single-source and multi-source medical DG benchmark datasets demonstrate that CoDG-Net not only outperforms existing state-of-the-art methods in target-domain segmentation performance, but also achieves a lower forgetting rate on the source-domain data. The code is available at: https://github.com/wangprocess/CoDG-Net.",
    "published": "2026-10-04T08:43:24Z",
    "updated": "2026-10-04T08:43:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05053"
  },
  {
    "id": "2610.05051",
    "title": "LogSig-SSM: Time-Series Modelling with Multi-Scale Log-Signature Compression for State-Space Models",
    "authors": [
      "Felix Oury",
      "Nicolas Calvo Peiro",
      "Reiko J. Tanaka"
    ],
    "abstract": "Time-series data are often sampled irregularly at high frequencies and exhibit long-range dependencies, which makes long-horizon modelling difficult. Continuous-time models such as neural controlled differential equations (NCDEs) and neural rough differential equations (NRDEs) can handle irregular sampling, but they scale poorly to long sequences. Selective state-space models (SSMs) such as Mamba scale linearly with sequence length, but they provide limited recurrent mixing across hidden dimensions within a single block. We propose LogSig-SSM (Log-Signature Compression for State-Space Models), which first compresses long multivariate time series into a shorter sequence of tokens using multi-scale windowed log-signatures, and then processes these tokens with a selective SSM backbone. LogSig-SSM is scalable and robust to irregular sampling, combining log-signature tokens that capture higher-order cross-channel interactions with a selective SSM that models long-range dependencies. The model also admits a continuous-time interpretation as an NCDE/NRDE-style system driven by a log-signature-based input, in which selectivity induces an input-dependent rescaling of the latent dynamics. Across four benchmarks, namely long-sequence classification on UEA, high-frequency physiological regression on PPG-DaLiA, multivariate weather forecasting, and irregularly sampled clinical prediction on PhysioNet Sepsis, LogSig-SSM outperforms or matches strong SSM and continuous-time baselines while training up to $30\\times$ faster and using up to $37\\times$ less GPU memory than Mamba on the longest sequences.",
    "published": "2026-10-04T08:41:36Z",
    "updated": "2026-10-04T08:41:36Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05051"
  },
  {
    "id": "2610.05048",
    "title": "E$^2$-OPSD: Taming Entropy Overshoot in On-Policy Self-Distillation",
    "authors": [
      "Yifei Liu",
      "Minghao Fang",
      "Xinyu Gu",
      "Chengkai Yao",
      "Mengdi Liu",
      "Tengfei Ma",
      "Jiangbin Zheng",
      "Chang Yu",
      "Zhangyang Gao"
    ],
    "abstract": "On-policy self-distillation (OPSD) provides dense token-level supervision without a second model: one network acts as teacher with the reference solution and as student with only the problem. We identify a specific failure mode of this recipe. During training, student token entropy rises past the teacher's and remains elevated, a pattern we call entropy overshoot. We trace it to both sides of distillation. The reference-conditioned teacher is confident along its answer-directed reasoning path, but this confidence transfers poorly to student-generated prefixes, making its supervision overly tied to answer-specific cues rather than reusable reasoning patterns; meanwhile, the forward KL used by OPSD continually diffuses the student's predictive distribution without pulling it back. We introduce E$^2$-OPSD to address both causes. Exemplar-guided teaching replaces the current answer with a retrieved solved neighboring problem, providing transferable reasoning guidance without revealing the destination and better matching student-reachable states. Entropy-aware distillation uses the student-teacher entropy gap to determine the direction and strength of each token's correction. E$^2$-OPSD improves math reasoning by up to 4.3 points in mean@16 over OPSD, while out-of-domain evaluations show gains over the corresponding base models of up to 4.9 points in mean@16 and 5.5 points in pass@8. Despite these gains, E$^2$-OPSD remains simple, requiring no additional forward passes or networks.",
    "published": "2026-10-04T08:32:33Z",
    "updated": "2026-10-06T02:10:14Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05048"
  },
  {
    "id": "2610.05044",
    "title": "AraYoungVoices: A Diverse L1/L2 Corpus of Arabic Child and Adolescent Speech",
    "authors": [
      "Shammur Absar Chowdhury",
      "Zien Sheikh Ali",
      "Houssam Eddine-Othman Lachemat",
      "Hamdy Mubarak"
    ],
    "abstract": "State-of-the-art ASR systems primarily target native adult speech, leading to substantial performance gaps for children, adolescents, and L2 speakers. We introduce AraYoungVoices, a 151.72-hour Arabic read-speech corpus from 286 speakers aged 7--18, comprising AraKids (7--12) and AraTeens (13--18). The corpus includes 146 native Arabic (L1) and 140 second-language (L2) speakers, with native speakers spanning Egyptian, Gulf, Levantine, and North African dialectal backgrounds and L2 speakers representing diverse linguistic backgrounds across the Americas, Asia, Africa, and Europe. We benchmark four pretrained ASR models under zero-shot and fine-tuned settings using unseen-speaker-$\\&$-unseen-prompt (USUP) and unseen-speaker-$\\&$-seen-prompt (USSP) evaluations. Results show that L2 speech remains substantially more challenging than L1 speech, with the largest errors observed mainly for younger L2 speakers. Age-specific fine-tuning improves the matched age group, while joint fine-tuning provides a stronger balance across populations. ASR hypotheses are also consistently closer to the standard reading prompt than to the verbatim transcription, particularly for L2 speech, suggesting partial normalization of reading deviations.",
    "published": "2026-10-04T08:25:30Z",
    "updated": "2026-10-04T08:25:30Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.05044"
  },
  {
    "id": "2610.05043",
    "title": "CI-JEPA: A Counterfactual Analysis of Latent Representations in Joint-Embedding Predictive Architectures for Self-Supervised Learning",
    "authors": [
      "Mintu Dutta",
      "Ritesh Vyas",
      "Mohendra Roy *"
    ],
    "abstract": "Self-supervised visual representation learning learns useful features without manual annotations during representation training. The image-based joint-embedding predictive architecture (I-JEPA) predicts latent representations of masked image regions, but its objective does not explicitly model responses to specified visual interventions. We introduce CI-JEPA, a counterfactual intervention-aware extension that learns to predict the representation change $ΔZ = Z_{\\mathrm{CF}} - Z$ between an original image and a modified counterpart. We assess representation robustness through selective sensitivity: stronger responses to task-relevant semantic changes than to nuisance changes. Experiments on Flowers102 use flower-center occlusion as a candidate semantic intervention and background blur and tint as candidate nuisance interventions. With frozen-encoder linear probing, CI-JEPA achieves a best validation accuracy of 78.14\\%, compared with 77.55\\% for both the pretrained ViT-B/16 and the I-JEPA baseline, a gain of 0.59 percentage points. The reported mean $L_2$ representation changes are 4.42 for center occlusion, 3.48 for background tint, and 2.83 for background blur. This ordering is consistent with relative semantic selectivity for the evaluated interventions, rather than complete nuisance invariance. The accuracy comparison is complementary and does not establish improved robustness over the baselines. These controlled image modifications provide a framework for studying intervention-induced changes in JEPA representations; they do not establish causal feature discovery or robustness to all visual changes.",
    "published": "2026-10-04T08:22:58Z",
    "updated": "2026-10-04T08:22:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05043"
  },
  {
    "id": "2610.05041",
    "title": "Communication Shapes Collective Inference in Self-Adapting LLM Societies: Evidence from Mafia",
    "authors": [
      "Haonan Huang",
      "Joey Xiao"
    ],
    "abstract": "When does communication help a group identify hidden adversaries, and how does its value change as the group adapts? In Mafia, an informed minority hides inside an uninformed majority whose only evidence is open play. The zero-information game, where each day's vote eliminates a random player, is exactly solved and scores every society; matched-casting comparisons between protocols identify the effect of communication. Societies of 8-100 claude-haiku-4-5 agents (7,416 analyzed games, 1.9M model calls) adapt by rewriting and inheriting private strategy notes. Simultaneous broadcast improves adversary identification over silence in all nine compositions tested (8-46 players). Turn-taking removes most of this advantage; its voting landslides are as frequent as broadcast's but land on mafia near chance (1.08x versus 2.53x). At 70 players, agents reading eight statements per day identify adversaries worse than silent ones, and limited talk is worth less than at 46 players. Adaptation is fast but need not help. In their first broadcast games, citizens announce their role far more often than mafia (91% vs. 30%) and first-day votes find mafia at three times chance; within two generations citizens stop announcing and the cue fades, a change the inherited notes carry. In controlled redeployments at 16 players, societies carrying sixty generations of their own notes score below societies with none. Communication shapes both collective inference and the signals it depends on, so a protocol's value must be measured together with the adaptation that changes those signals.",
    "published": "2026-10-04T08:19:20Z",
    "updated": "2026-10-04T08:19:20Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.05041"
  },
  {
    "id": "2610.05037",
    "title": "SparseCraft: Agentic Hardware-Software Co-Optimization for Sparse Computing",
    "authors": [
      "Rajatabha Chakraborty",
      "M P Samartha",
      "Vedant Pahariya",
      "Priyesh Shukla"
    ],
    "abstract": "Sparse-accelerator design spaces are usually searched against analytical models, so a design point is admitted on what a model predicts rather than on what the hardware does. SparseCraft closes that gap with a language model inside a closed CHIA loop. In each of 15 iterations the model reads the measured outcome of the previous one and edits the Chisel RTL, the memory configuration and the sparse-kernel schedule of a Gemmini accelerator through MCP tool servers, and no candidate counts until it has been checked for legality, elaborated, simulated cycle-accurately, checked bit-for-bit on every output against a golden reference, and synthesised. The harness turns each measurement into the next work order, a diagnosed bottleneck with matching strategy guidance, the history of tried designs and a score of the model's own prediction, and a second model repairs changes that fail a gate. On a $512 \\times 512$ GraphChallenge sparse-DNN layer the loop reaches 2.1x fewer cycles, 9.8x less off-chip traffic and 22.8% less area than the block-sparse Gemmini baseline, with 5.61x higher modelled perf/W and 11.8x lower EDP. The levers span three layers: a schedule that keeps the dense operand resident removes 9.8x of the traffic, a zero-gated MAC and a zero-row skip unit that the model wrote in Chisel cut energy, and resizing the memories cuts area.",
    "published": "2026-10-04T08:06:35Z",
    "updated": "2026-10-04T08:06:35Z",
    "categories": [
      "cs.AR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.05037"
  },
  {
    "id": "2610.05033",
    "title": "Code2Games: Enabling Coding Agents for Gaming World Generation",
    "authors": [
      "Wei Wu",
      "Ziyang Xu",
      "Zeyu Zhang",
      "Yang Zhao",
      "Hao Tang"
    ],
    "abstract": "Generating a high-quality gaming world from a natural-language game intent requires joint reasoning about scene structure, spatial layout, gameplay objectives, interactive entities, and executable gameplay logic. Existing coding agents can generate individual assets, scenes, or scripts, but often struggle to maintain consistency across these components. We propose Code2Games, an agentic framework that builds a structured gaming world upon a base Blender world generated from the same game intent. Code2Games coordinates scene analysis, gameplay planning, constrained gaming-world generation, and gaming-engine customization through a shared scene-gameplay representation with persistent element correspondence. After world generation, Code2Games adapts the generated world to Unreal Engine 5 and employs an execution-guided reconstruction process that uses compilation diagnostics, runtime feedback, and gameplay test results to resolve inconsistencies arising during engine adaptation. To systematically evaluate gaming-world generation, we introduce the GameCode4D benchmark, which comprises ten fixed game prompts spanning different levels of scene and gameplay complexity. We evaluate the generated results across four dimensions: visual quality, interactive fidelity, multimodal artifact quality, and playable-game quality. Experiments demonstrate that, compared with direct gaming-world generation by coding agents and existing baseline methods, Code2Games consistently improves the visual quality and interactive fidelity of generated gaming worlds, as well as the quality of the resulting games after engine adaptation.",
    "published": "2026-10-04T07:54:45Z",
    "updated": "2026-10-04T07:54:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.05033"
  },
  {
    "id": "2610.04528",
    "title": "Quantifying Collusion Among Autonomous LLM Agents: A Statistical Analysis of the Collusion Wiki Incident",
    "authors": [
      "Shariq Murtuza"
    ],
    "abstract": "In August and September 2026, independent researchers publicly documented an unusual incident: thousands of autonomous agents, self identifying as OpenAI models on web research tasks, discovered and began using a small German wiki as an improvised message board posting roughly 18,000 times over six weeks to relay task answers, share a sandbox escape technique, and coordinate against a volunteer human moderator who spent weeks manually deleting their content [1]. The investigators' public writeup is a careful qualitative account, rich with direct quotation, but does not attempt a statistically rigorous quantitative characterization of the behaviour it documents.",
    "published": "2026-10-03T13:46:42Z",
    "updated": "2026-10-03T13:46:42Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.04528"
  },
  {
    "id": "2610.04526",
    "title": "Diffusion-Based Stress Testing of Overload Monitoring for Resilient Emergency Cellular Networks Using Internet CDR Proxies",
    "authors": [
      "Bilal Hussain",
      "Xiao Tang",
      "Tan Li",
      "Muhammad Azhar",
      "Danista Khan",
      "Fawad Ahmad"
    ],
    "abstract": "Disasters can overload cellular control-plane signaling within minutes, yet fine-grained Radio Resource Control (RRC) or Next Generation (NG) Application Protocol (NGAP) telemetry is privacy-sensitive and costly to collect for analytics. Many emergency monitoring pipelines therefore rely on coarse Call Detail Record (CDR) aggregates. We treat Internet activity in CDR grids as a practical proxy for hidden signaling stress under that constraint. We train a lightweight convolutional neural network (CNN) on stylized overload injections, stress-test it with diffusion-synthesized surges that preserve normal traffic structure, and adapt the detector by retraining on hard synthetic samples. Under stress-test conditions, the default alert threshold fails even though receiver operating characteristic (ROC) curves stay strong: the detector still assigns overloaded cells a larger overload probability than normal cells, but those probabilities fall below the default cutoff 0.5 and are labeled normal, so the F1-maximizing threshold -- selected post hoc on the same stress-test grids (oracle $τ^*$) -- shifts by $0.32 \\pm 0.03$ (operating-point drift). Across three random seeds, hard-sample adaptation raises thresholded performance (F1) from 0% (no alerts at the default cutoff 0.5 on any seed) to $85.67 \\pm 14.37$% and ranking from ROC-AUC $0.886 \\pm 0.040$ to $0.99996 \\pm 0.00007$. Diffusion-synthesized surges expose threshold fragility that matched-condition training -- training and testing on the same stylized injections -- hides, and hard-sample adaptation restores usable alerts at the default cutoff. Together, these steps define a reusable pre-deployment stress test for emergency monitors. Internet-only CDR input further supports lightweight AI-native workflows that combine monitoring, recalibration, and adaptation.",
    "published": "2026-10-03T13:46:27Z",
    "updated": "2026-10-03T13:46:27Z",
    "categories": [
      "cs.NI",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04526"
  },
  {
    "id": "2610.04517",
    "title": "EvoCast: Reliable Autonomous Research Agents for Iterative Forecasting Architecture Evolution",
    "authors": [
      "Kaipeng Xu",
      "Xianli Yan",
      "Yan Wang",
      "Xiang Liu",
      "Shan Liu"
    ],
    "abstract": "Deep time-series forecasting models have rapidly diversified, yet adapting them to a specific task still requires extensive expert effort in model selection, mechanism diagnosis, architecture design, implementation, and evaluation. Existing AutoML methods are constrained by predefined search spaces, while general-purpose LLM research agents lack reliable control over experimental protocols and model promotion. We introduce EvoCast, a fully autonomous research-agent system for iterative forecasting architecture evolution. EvoCast first establishes and diagnoses a task-specific baseline through executed mechanism ablations, then generates evidence-grounded research directions from dataset characteristics, diagnostic results, prior rounds, and failure records. Its central design, cognition-authority separation, assigns open-ended hypothesis generation and code implementation to LLM agents, while deterministic program authorities control source-edit boundaries, canonical evaluation, and promotion decisions. Experimental outcomes are accumulated as evidence to guide subsequent rounds. Results show that EvoCast completes complex architecture modifications with higher implementation success and lower agent-side token/time cost, and develops task-specific architectures that outperform selected baselines, strong forecasting models, and agent baselines in three real-world forecasting cases. The code is available at https://github.com/18e0-x/EvoCast.",
    "published": "2026-10-03T13:30:53Z",
    "updated": "2026-10-03T13:30:53Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04517"
  },
  {
    "id": "2610.04515",
    "title": "Towards Credible Agent-Based Policy Simulations: Disentangling Opportunities and Preferences in a Financial Inclusion Case Study of Egypt",
    "authors": [
      "Alba Aguilera",
      "Georgina Curto",
      "Nardine Osman",
      "Ahmed Al-Awah"
    ],
    "abstract": "Credibility is a central topic for agent-based models intended to support policy-making. Simulations must not only represent the target scenarios and their core dynamics but also demonstrate that their assumptions, parameters, and outputs are empirically grounded and sufficiently accurate for their intended use. This paper addresses this challenge by presenting a general modelling framework, aligned with the Capability Approach, for building credible policy simulations that rely on data and domain-expert knowledge. It then demonstrates how it can be contextualised and implemented to study the social challenge of financial inclusion in Egypt, building on an agent-based model that represents heterogeneous individuals and firms behaving according to their financial states, barriers, opportunities, and preferences. The model is fitted to real-world data in two stages, initialisation and calibration, which respectively build representative synthetic populations and estimate behavioural parameters. By fixing the feasibility parameters, which determine agents' opportunities, and calibrating preference parameters across different population groups, we are able to distinguish and analyse the role of institutional and social barriers in the system, as well as the role of agents' motivations and priorities. This calibration stage provides transparent and group-specific hypotheses about the drivers of observed financial-inclusion gaps, which can further be analysed as gaps between agents' opportunities and realised outcomes, a very relevant insight for policy-making. This paper is thus a step towards improving the credibility and usefulness of policy simulations, strengthening the relationship between the model, the real target system, and the stakeholders who will use it. The code is available at: \\url{https://www.comses.net/codebase-release/df8383cb-f49b-4f09-8cce-73603b59adcc/}.",
    "published": "2026-10-03T13:26:06Z",
    "updated": "2026-10-03T13:26:06Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.04515"
  },
  {
    "id": "2610.04510",
    "title": "ManifoldCache: Training-Free Diffusion Acceleration via Constraint Manifold Caching",
    "authors": [
      "Prashant Pandey",
      "Devineni Sri Venkatraya Chowdary",
      "Brejesh Lall"
    ],
    "abstract": "Diffusion models for structured scientific generation must produce samples satisfying hard geometric constraints imposed by physics, chemistry, or biology, yet inference in these settings is prohibitively slow, demanding hundreds to thousands of neural-function evaluations per sample. We unify eight state-of-the-art models spanning medical volumetrics, molecular conformations, protein backbone design, crystal structure prediction, and multi-view 3D scenes under a single abstraction, Constraint-Manifold Diffusion Models (CMDMs), in which the target distribution is supported on a manifold defined by an externally specified constraint map. All existing acceleration families fail on this class: quantization exhausts memory on high-dimensional volumetric operators; pruning breaks constraint fidelity; fast ODE solvers allow trajectories to drift off the constraint manifold; and feature-caching heuristics are blind to constraint geometry, inducing mode confusion in the high-noise regime. We introduce ManifoldCache, the first training-free, data-free accelerator designed from first principles for CMDMs. The key insight is that the conditional score decomposes orthogonally into a normal component, which enforces constraint satisfaction, and a tangential component, which navigates within the manifold. Exploiting this structure, we prove that the noise-schedule midpoint is a sharp safe-caching boundary: caching before it incurs provably bounded error, while caching after it guarantees a strictly positive fraction of trajectories suffer mode confusion, a gap that persists up to the boundary. We further prove that deeper network blocks admit provably larger certified cache strides within the safe phase, as a consequence of the score decomposition propagating through block Jacobians. The resulting schedule requires no calibration data, along with zero training overhead.",
    "published": "2026-10-03T13:18:15Z",
    "updated": "2026-10-03T13:18:15Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04510"
  },
  {
    "id": "2610.04506",
    "title": "EgoExo-Next:Benchmarking Vision-Language Models on Visual-Option Next-State and Cross-View Reasoning",
    "authors": [
      "Yutong Li",
      "Molin Wang",
      "Xiaotong Li",
      "Yanyan Fang",
      "Daoguo Dong",
      "Ziyi Ye"
    ],
    "abstract": "Vision-language models (VLMs) are increasingly evaluated for egocentric and cross-view video reasoning, yet existing benchmarks largely focus on semantic event understanding, temporal relations, or correspondence between already observed views, leaving their ability to reason directly about future visual states underexplored. We introduce EgoExo-Next, a visual-option benchmark for dynamic visual-state reasoning, where models must identify how an observed action trajectory subsequently appears rather than predict only an action label or textual description. EgoExo-Next contains 2,503 human-curated four-choice questions from six public egocentric and ego--exo video sources and comprises four interconnected subtasks that evaluate egocentric next-state prediction, bidirectional ego--exo state correspondence, exocentric next-state prediction, and their composition in Ego-to-Exo Next-State. Extensive evaluation of proprietary, open-source, and spatial reasoning VLMs reveals a substantial human--model gap, with the best model achieving 43.81\\% average accuracy compared with 98.55\\% for humans, and the largest degradation occurring on the composed Ego-to-Exo task. These results suggest that current VLMs remain substantially limited in dynamic visual-state reasoning, particularly when temporal progression and cross-view reasoning must be composed. The benchmark is publicly available at \\url{https://huggingface.co/datasets/yutongli2024/EgoExo-Next}.",
    "published": "2026-10-03T13:09:37Z",
    "updated": "2026-10-03T13:09:37Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04506"
  },
  {
    "id": "2610.04502",
    "title": "Localization Lens for Improving Medical Vision-Language Models",
    "authors": [
      "Hasan Farooq",
      "Murtaza Taj",
      "Mehwish Nasim",
      "Arif Mahmood"
    ],
    "abstract": "Medical Vision-Language Models (Med-VLMs) have demonstrated strong capabilities in clinical tasks. However, they often struggle to understand anatomical structures and spatial positioning, which are crucial for medical reasoning. To address this, we propose a localization-aware enhancement to the Med-VLM pipeline, introducing improvements at three levels: data,architecture, and alignment. First, we introduce localization lens, a set of expert-validated representations that provide richer anatomical and positional context. However, as these representations increase input complexity, we integrate pixel shuffle within the model architecture to filter and refine representations, enhancing spatial information processing while preserving anatomical continuity. Lastly, to effectively align the localization lens representations with textual features, we incorporate decoupled contrastive loss (DCL) alongside the standard loss function. This ensures better feature discrimination and robustness, particularly in data limited medical settings. Through extensive evaluations on medical visual question answering (Med-VQA) datasets, we show that our methodology improves localization-driven performance across different Med-VLM architectures. Our analysis of localization-based questions further reveals that improvements in anatomy and spatial reasoning directly enhance the overall accuracy of Med-VQA upto 6.2%. The proposed approach is model-agnostic and can be seamlessly integrated into existing Med-VLM pipelines. The dataset, code, and trained models will be made publicly available at https://github.com/CVLABLUMS/localizationlens.",
    "published": "2026-10-03T13:04:15Z",
    "updated": "2026-10-03T13:04:15Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04502"
  },
  {
    "id": "2610.06950",
    "title": "Learning to Decide, Not to Reason: Parameter-Efficient Decision Operators via Low-Rank Activation Steering",
    "authors": [
      "Ran Li",
      "Lei Chen"
    ],
    "abstract": "Injecting skills into a frozen language model currently costs a million parameters and a reinforcement-learning pipeline. We introduce \\method{}, a System-1 decision operator trained by behavior cloning that lowers this cost by roughly two orders of magnitude. The default operator uses 330K parameters to match a 1.33M-parameter operator trained with reinforcement learning, exceeds or achieve comparable performance, while collapsing 3,685-token deliberation into a 6-token decision with no loss in accuracy. A rank-4 variant with 23K parameters, 1/58 of the strongest published skill operator, suffices for SearchQA and near-suffices for LiveMath, where higher rank still helps; the same recipe transfers across five tasks and three backbones, with out-of-distribution gains persisting on LiveMath problems released months after training. The gap to prior work is trainability, and it is set jointly by initialization and architecture: the initialization of prior operators zeroes the gradient of both large factor matrices at the first optimization step, whereas our zero-initialized output projection inside a shared low-rank backbone receives a gradient immediately, which a gradient-flow probe confirms directly. The gain isn't chain-of-thought compression: 23 of 57 LiveMath points beat the base model's best-of-8 sampling, and a logit-lens probe shows the operator amplifies the answer along the model's existing late-layer pathway, not writing it earlier. Gains track the base model's headroom across 13 base--task pairs, and skills compose as approximately linear operators that can be added, interpolated, and hot-swapped at inference time. Code on https://github.com/rlisml/decisionsteer.",
    "published": "2026-10-03T12:57:57Z",
    "updated": "2026-10-03T12:57:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.06950"
  },
  {
    "id": "2610.04499",
    "title": "Homogeneous Semantic Alignment and Hierarchical Expert Routing for Radiology Report Generation",
    "authors": [
      "Erjian Zhang",
      "Jiayuan Ma",
      "Liejun Wang",
      "Yikemaiti Sataer",
      "Xiaoming Tao",
      "Zhiqing Guo"
    ],
    "abstract": "Radiology report generation (RRG) aims to convert medical images into diagnostic texts to assist in clinical decision-making and alleviate the workload of physicians. Although existing methods have made extensive progress in cross-modal interaction and the incorporation of external priors, the distribution shift of underlying representations and the undifferentiated rigid coupling of heterogeneous information cause weak visual abnormality cues to be easily diluted by massive text priors and generation inertia during decoding. To overcome this bottleneck, inspired by cognitive science, we propose a novel two-stage Homogeneous Semantic Alignment and Hierarchical Expert Routing (HSA-HER) framework. First, the model introduces an explicit homogeneous distribution constraint in the underlying latent space to effectively eliminate the cross-modal distribution shift between visual and textual features, thereby extracting purified visual features as semantic anchors that accurately align with diseases. Second, for heterogeneous clinical evidence composed of visual features, local entities, and global retrievals, we design a hierarchical expert routing mechanism guided by these disease semantic anchors. This mechanism abandons the undifferentiated rigid coupling paradigm. Specifically, it dynamically activates expert networks to perform targeted mining and semantic reconstruction on multi-source evidence, and adaptively allocates fusion weights. Extensive experiments on three mainstream benchmark datasets demonstrate that HSA-HER achieves state-of-the-art performance, accurately depicting complex imaging details and key diagnostic information.",
    "published": "2026-10-03T12:57:35Z",
    "updated": "2026-10-03T12:57:35Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.04499"
  },
  {
    "id": "2610.04493",
    "title": "Understanding Clustering in Slot Attention via Particle Dynamics",
    "authors": [
      "Vasudev Joy",
      "Rajat Rasal",
      "Avinash Kori",
      "Anthea Monod",
      "Ben Glocker"
    ],
    "abstract": "Studying attention through the lens of interacting particle dynamics has shown how token clustering can emerge from the underlying dynamics. We extend this perspective to slot attention, a method for object-centric image segmentation and representation learning in which learned components obscure how much of the clustering behaviour is intrinsic to the attention dynamics. We therefore introduce simplified slot attention (SSA), a parameter-free variant whose dynamics are connected to soft $k$-means clustering and which provides a straightforward mechanistic explanation for the emergence of object-centric representations. On the Pascal VOC dataset, SSA achieves performance comparable to that of slot attention, demonstrating that competitive object-centric segmentation can be achieved without learned neural-network components.",
    "published": "2026-10-03T12:49:44Z",
    "updated": "2026-10-03T12:49:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.04493"
  },
  {
    "id": "2610.04488",
    "title": "Can LLM Agents Automate Reinforcement Learning for Text-to-Speech?",
    "authors": [
      "Xuanjun Chen",
      "Zixiong Su",
      "Hao Shi",
      "Chang Zeng",
      "Kai Li",
      "Jyh-Shing Roger Jang",
      "Hung-yi Lee"
    ],
    "abstract": "Although reinforcement learning (RL) post-training repairs the localized segmental errors of zero-shot text-to-speech (TTS), arriving at a working recipe still relies on tedious manual tuning, and whether LLM agents can take over this research pipeline is unclear. We investigate this question with AgenticTTS-Forge, a collaborative workflow that structures human guidance and agentic execution around a shared workspace, applied to CosyVoice2-0.5B. To measure what the agent automates, we audit its trajectory stage by stage against the published recipe. To measure what it exploits, we score its policies with held-out observers hidden from the agent. Our results show that the agent recovers an underspecified recipe, improves it, and, when gains stall, surveys the literature unprompted and pivots from the LM carrier to the flow carrier, halving Bad cases. However, its autonomy exposes three traps across the data, proxy, and algorithm axes: the held-out set leaks through a channel the contract never reads, a self-shaped reward inflates the proxy where it is scored, and separately tuned policies do not compose additively. These findings show that the binding constraint is measurement rather than reasoning, and can inform the design of harnesses whose contracts read every channel the agent does.",
    "published": "2026-10-03T12:44:09Z",
    "updated": "2026-10-03T12:44:09Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.04488"
  },
  {
    "id": "2610.04475",
    "title": "VCLMU: Mechanism-Centric Virtual Cell World Modeling for Perturbation Response",
    "authors": [
      "Yuwei Miao",
      "Azim Dehghani Amirabad",
      "Scott Oloff",
      "Junzhou Huang",
      "Tianyu Cui",
      "Rui Liao"
    ],
    "abstract": "Predicting cellular responses to genetic perturbations is a central capability for virtual cells and a key step toward computational modeling of biological interventions. Most existing models directly map an unperturbed molecular profile and perturba- tion to the resulting observation without explicitly representing the latent cellular transition induced by the intervention. We introduce a mechanism-centric virtual cell world model that represents cellular state as a set of Latent Mechanism Units (LMUs) and treats genetic perturbations as actions on these latent states. Each LMU combines a reusable identity grounded in multimodal biological evidence with an observation-specific state, allowing a perturbation to induce mechanism- specific stochastic transitions before decoding the resulting transcriptional response. We train VCLMU through two-stage pretraining, first on around 200K pseudo-bulk perturbation profiles and then on gene-aligned single-cell perturbation data. Across six perturbation-disjoint benchmarks, VCLMU consistently improves perturbation- specific response recovery over strong baselines while maintaining competitive global response accuracy. We further analyze learned LMUs through enrichment between perturbation responses and LMU gene sets and show that they capture structured biological response programs. These results support mechanism-level latent state transition as a useful formulation for virtual cell models that aim to predict and interpret cellular responses to biological interventions.",
    "published": "2026-10-03T12:26:20Z",
    "updated": "2026-10-03T12:26:20Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.04475"
  }
];
